import { Injectable } from '@angular/core';
import { ProjectService } from './project.service';
import { TablesService } from './tables.service';
import { v4 as uuid } from 'uuid';

export interface Task {
  id?: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(
    private projectService: ProjectService,
    private tableService: TablesService
  ) {}

  addTask(projectId: string, tableId: string, task: Task) {
    const project = this.projectService.getProjectById(projectId);
    const table = this.tableService.getTable(projectId, tableId);

    table.tasks.push({
      ...task,
      id: uuid(),
    });

    this.projectService.updateProject(project);
  }

  deleteTask(projectId: string, tableId: string, taskId: string) {
    const project = this.projectService.getProjectById(projectId);
    const table = this.tableService.getTable(projectId, tableId);

    table.tasks = table.tasks.filter((x) => x.id !== taskId);

    this.projectService.updateProject(project);
  }

  editTask(
    projectId: string,
    tableId: string,
    taskId: string,
    taskDescription: string
  ) {
    const project = this.projectService.getProjectById(projectId);
    const taskToEdit = this.getTask(projectId, tableId, taskId);

    taskToEdit.description = taskDescription;

    this.projectService.updateProject(project);
  }

  getTask(projectId: string, tableId: string, taskId: string) {
    const table = this.tableService.getTable(projectId, tableId);
    const task = table.tasks.find((x) => x.id === taskId);

    if (!task) {
      throw new Error(`Task with id ${taskId} not found.`);
    }

    return task;
  }
}
