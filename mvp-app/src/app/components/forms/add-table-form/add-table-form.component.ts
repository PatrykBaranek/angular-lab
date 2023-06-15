import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TablesService } from 'src/app/services/tables.service';

@Component({
  selector: 'app-add-table-form',
  templateUrl: './add-table-form.component.html',
  styleUrls: ['./add-table-form.component.scss'],
})
export class AddTableFormComponent {
  formGroup = new FormGroup({
    tableName: new FormControl('', Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<AddTableFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tablesService: TablesService
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
  onCreate(): void {
    console.log(this.formGroup.value.tableName as string, this.data.projectId);

    this.tablesService.createTableForProject(
      this.data.projectId,
      this.formGroup.value.tableName as string
    );

    this.dialogRef.close();
  }
}
