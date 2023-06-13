import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project, ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  project!: Project;
  projectSubscription!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.projectSubscription = this.route.params.subscribe((params) => {
      let id = params['id'];

      this.project = this.projectService.getProjectById(id);
    });
  }

  ngOnDestroy(): void {
    this.projectSubscription.unsubscribe();
  }
}
