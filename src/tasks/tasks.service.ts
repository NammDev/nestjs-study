import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: MongoRepository<TaskEntity>,
  ) {}

  async getTaskById(id: number): Promise<TaskEntity> {
    const found = await this.taskRepository.findOne({ where: { id } });
    if (!found) throw new NotFoundException(`Task with ID "${id}" not found`);
    return found;
  }
}
