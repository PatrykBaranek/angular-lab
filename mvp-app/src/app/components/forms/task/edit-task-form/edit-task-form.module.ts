import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTaskFormComponent } from './edit-task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [EditTaskFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [EditTaskFormComponent],
})
export class EditTaskFormModule {}
