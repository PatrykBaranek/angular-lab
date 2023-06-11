import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-create-new-project-form',
  templateUrl: './create-new-project-form.component.html',
  styleUrls: ['./create-new-project-form.component.scss'],
})
export class CreateNewProjectFormComponent implements OnInit {
  projectForm = new FormGroup({
    projectName: new FormControl(''),
    projectDescription: new FormControl(''),
  });

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.projectService.addNewProject(this.projectForm.value as string);
  }
}
