import { NgModule } from '@angular/core';
import { CreateNewProjectFormComponent } from './create-new-project-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ProjectService } from 'src/app/services/project.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CreateNewProjectFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [ProjectService],
  exports: [CreateNewProjectFormComponent],
})
export class CreateNewProjectFormModule {}
