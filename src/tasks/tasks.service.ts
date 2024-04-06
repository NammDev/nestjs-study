import { TaskRepository } from './task.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  constructor(private readonly taskRepository: TaskRepository) {}
}
