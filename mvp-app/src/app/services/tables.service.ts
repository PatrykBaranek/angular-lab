import { Injectable } from '@angular/core';
import { ProjectService } from './project.service';
import { Task } from './tasks.service';
import { v4 as uuid } from 'uuid';

export interface Table {
  id: string;
  name: string;
  tasks: Task[];
}

@Injectable({
  providedIn: 'root',
})
export class TablesService {
  constructor(private projectService: ProjectService) {}

  createTable(projectId: string, tableName: string) {
    const project = this.projectService.getProjectById(projectId);

    project.tables.push({
      id: uuid(),
      name: tableName,
      tasks: [],
    });

    this.projectService.updateProject(project);
  }

  editTable(projectId: string, tableId: string, tableName: string) {
    const project = this.projectService.getProjectById(projectId);
    const tableToEdit = this.getTable(projectId, tableId);

    tableToEdit.name = tableName;

    this.projectService.updateProject(project);
  }

  deleteTable(projectId: string, tableId: string) {
    const project = this.projectService.getProjectById(projectId);
    const tableToDelete = this.getTable(projectId, tableId);

    project.tables = project.tables.filter((x) => x.id !== tableToDelete.id);

    this.projectService.updateProject(project);
  }

  updateTable(projectId: string, tableId: string, updatedTable: Table) {
    const project = this.projectService.getProjectById(projectId);
    let tableToUpdate = this.getTable(projectId, tableId);

    tableToUpdate = {
      ...updatedTable,
    };

    this.projectService.updateProject(project);
  }

  getTable(projectId: string, tableId: string) {
    const project = this.projectService.getProjectById(projectId);

    const table = project.tables.find((table) => table.id === tableId);

    if (!table) {
      throw new Error(`Table with id ${tableId} not found.`);
    }

    return table;
  }
}
