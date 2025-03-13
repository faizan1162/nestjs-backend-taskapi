import { Controller, Get, Post, Put, Delete, Body, Param, BadRequestException } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ResponseDTO } from '../../common/response.dto'; // Adjust import path

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() body: { title: string; description?: string }): Promise<ResponseDTO<any>> {
    try {
      // Validation for title
      if (!body.title || body.title.trim().length === 0) {
        throw new BadRequestException('Title is required and should be a non-empty string');
      }

      const result = await this.tasksService.create(body.title, body.description);
      return new ResponseDTO('success', 'Task created successfully', result);

    } catch (error) {
      // Log the error to the console for debugging (optional)
      console.error(error);

      return new ResponseDTO('error', error.message || 'Failed to create task', null);
    }
  }

  @Get()
  async findAll(): Promise<ResponseDTO<any>> {
    try {
      const tasks = await this.tasksService.findAll();
      return new ResponseDTO('success', 'Tasks fetched successfully', tasks);
    } catch (error) {
      return new ResponseDTO('error', error.message || 'Failed to fetch tasks', []);
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() body: { title: string; description?: string },
  ): Promise<ResponseDTO<any>> {
    try {
      // Validation for title
      if (!body.title || body.title.trim().length === 0) {
        throw new BadRequestException('Title is required and should be a non-empty string');
      }
      const updatedTask = await this.tasksService.update(id, body.title , body.description);
      if (!updatedTask) {
        return new ResponseDTO('error', 'Task not found', null);
      }
      return new ResponseDTO('success', 'Task updated successfully', null);
    } catch (error) {
      console.error(error);
      return new ResponseDTO('error', error.message || 'Failed to create task', null);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<ResponseDTO<any>> {
    try {
      const result = await this.tasksService.remove(id);
      if (result.affected === 0) {
        return new ResponseDTO('error', 'Task not found', null);
      }
      return new ResponseDTO('success', 'Task deleted successfully', null);
    } catch (error) {
      return new ResponseDTO('error', error.message || 'Failed to delete task', null);
    }
  }
}
