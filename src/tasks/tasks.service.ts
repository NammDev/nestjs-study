import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import { TaskRepository } from './task.repository';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: TaskRepository<TaskEntity>,
  ) {}

  async getTaskById(id: number): Promise<TaskEntity> {
    const found = await this.taskRepository.findOne({ where: { id } });
    if (!found) throw new NotFoundException(`Task with ID "${id}" not found`);
    return found;
  }
}
