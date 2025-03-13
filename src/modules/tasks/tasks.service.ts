import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private taskRepo: Repository<Task>) {}

  create(title: string, description?: string) {
    const task = this.taskRepo.create({ title, description });
    return this.taskRepo.save(task);
  }

  findAll(){
    return this.taskRepo.find();
  }

  findOne(id: number) {
    return this.taskRepo.findOne({ where: { id } }); // Use 'where' option
  }

  async update(id: number, title: string, description?: string) {
    const task = await this.findOne(id);
    if (!task) {
      return null; // Task not found
    }
    task.title = title;
    task.description = description || task.description;
    return this.taskRepo.save(task);
  }
  remove(id: number) {
    return this.taskRepo.delete(id);
  }
}