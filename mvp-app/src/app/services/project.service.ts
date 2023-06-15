import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Table } from './tables.service';

export interface Project {
  id: string;
  name: string;
  createdAt: Date;
  tables: Table[];
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = [];

  constructor() {
    if (localStorage.getItem('projects') !== null) {
      this.projects = JSON.parse(localStorage.getItem('projects') as string);
    }
  }

  addNewProject(projectName: string) {
    this.projects.push({
      id: uuid(),
      name: projectName,
      createdAt: new Date(),
      tables: [],
    });
    this.saveToLocalStorage();
  }

  deleteProject(projectId: string) {
    this.projects = this.projects.filter((project) => project.id !== projectId);
    this.saveToLocalStorage();
  }

  updateProject(project: Project) {
    const projectIndex = this.projects.findIndex((p) => p.id === project.id);
    this.projects[projectIndex] = project;
    this.saveToLocalStorage();
  }

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(projectId: string): Project {
    return this.projects.find((project) => project.id === projectId) as Project;
  }

  private saveToLocalStorage() {
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }
}
