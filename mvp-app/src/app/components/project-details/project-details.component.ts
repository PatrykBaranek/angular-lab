import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project, ProjectService } from 'src/app/services/project.service';
import { AddTableFormComponent } from '../forms/add-table-form/add-table-form.component';

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
    private dialog: MatDialog,
    private projectService: ProjectService
  ) {}

  addTableToProject() {
    const dialogRef = this.dialog.open(AddTableFormComponent, {
      data: {
        title: 'Add Table',
        projectId: this.route.snapshot.params['id'],
      },
    });
  }

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
