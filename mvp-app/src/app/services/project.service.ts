import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projectName: string = '';

  constructor() {}

  addNewProject(projectName: string) {
    this.projectName = projectName;
    localStorage.setItem('projects', JSON.parse(projectName));
  }
}
