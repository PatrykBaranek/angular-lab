import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-edit-task-form',
  templateUrl: './edit-task-form.component.html',
  styleUrls: ['./edit-task-form.component.scss'],
})
export class EditTaskFormComponent {
  formGroup = new FormGroup({
    taskDescription: new FormControl('', Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<EditTaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tasksService: TasksService
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
  onCreate(): void {
    this.tasksService.editTask(
      this.data.projectId,
      this.data.tableId,
      this.data.taskId,
      this.formGroup.value.taskDescription as string
    );

    this.dialogRef.close();
  }
}
