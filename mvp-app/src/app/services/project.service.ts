import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

export interface Project {
  id: string;
  name: string;
  createdAt: Date;
  tasks?: unknown;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  addNewProject(projectName: string) {
    let projects: Project[] = [];

    if (localStorage.getItem('projects') !== null) {
      projects = JSON.parse(localStorage.getItem('projects') as string);
    }
    projects.push({ id: uuid(), name: projectName, createdAt: new Date() });
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  deleteProject(projectId: string) {
    let projects: Project[] = [];

    if (localStorage.getItem('projects') !== null) {
      projects = JSON.parse(localStorage.getItem('projects') as string);
    }
    projects = projects.filter((project) => project.id !== projectId);
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  getProjects(): Project[] {
    let projects: Project[] = [];

    if (localStorage.getItem('projects') !== null) {
      projects = JSON.parse(localStorage.getItem('projects') as string);
    }

    return projects;
  }

  getProjectById(projectId: string): Project {
    let projects: Project[] = [];

    if (localStorage.getItem('projects') !== null) {
      projects = JSON.parse(localStorage.getItem('projects') as string);
    }

    return projects.find((project) => project.id === projectId) as Project;
  }
}
