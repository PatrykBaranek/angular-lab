import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss'],
})
export class AddTaskFormComponent {
  formGroup = new FormGroup({
    taskDescription: new FormControl('', Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<AddTaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tasksService: TasksService
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
  onCreate(): void {
    this.tasksService.addTask(this.data.projectId, this.data.tableId, {
      description: this.formGroup.value.taskDescription as string,
    });

    this.dialogRef.close();
  }
}
