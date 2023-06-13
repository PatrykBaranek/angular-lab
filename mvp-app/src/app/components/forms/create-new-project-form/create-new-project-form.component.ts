import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-create-new-project-form',
  templateUrl: './create-new-project-form.component.html',
  styleUrls: ['./create-new-project-form.component.scss'],
})
export class CreateNewProjectFormComponent implements OnInit {
  projectForm = new FormGroup({
    projectName: new FormControl('', Validators.required),
  });

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.projectService.addNewProject(
      this.projectForm.value.projectName as string
    );
    this.router.navigate(['/']);
  }
}
