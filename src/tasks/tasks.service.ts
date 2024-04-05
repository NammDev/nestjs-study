import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = ['do homework', 'do laundry', 'do dishes'];

  getAllTasks() {
    return this.tasks;
  }
}
