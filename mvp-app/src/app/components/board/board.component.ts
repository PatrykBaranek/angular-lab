import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project, ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  projects: Project[] = [];
  projectOptionsId: string | null = null;

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  onProjectDelete(projectId: string, event: Event) {
    event.stopPropagation();
    this.projectService.deleteProject(projectId);
    this.projects = JSON.parse(localStorage.getItem('projects') as string);
  }

  onSeeDetails(projectId: string, event: Event) {
    event.stopPropagation();

    this.router.navigate([`/project/${projectId}`]);
  }
}
