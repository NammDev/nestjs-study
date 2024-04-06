import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskRepository<TaskEntity> extends Repository<TaskEntity> {}
