import { Injectable } from '@angular/core';
import { ProjectService } from './project.service';
import { Task } from './tasks.service';

export interface Table {
  tableName: string;
  tasks: Task[];
}

@Injectable({
  providedIn: 'root',
})
export class TablesService {
  constructor(private projectService: ProjectService) {}

  createTableForProject(projectId: string, tableName: string) {
    const project = this.projectService.projects.find(
      (project) => project.id === projectId
    );

    if (!project) {
      console.error(`Project with id ${projectId} not found.`);
      return;
    }

    project.tables.push({
      tableName: tableName,
      tasks: [],
    });

    this.projectService.updateProject(project);
  }
}
