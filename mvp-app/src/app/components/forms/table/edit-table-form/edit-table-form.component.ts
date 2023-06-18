import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TablesService } from 'src/app/services/tables.service';

@Component({
  selector: 'app-edit-table-form',
  templateUrl: './edit-table-form.component.html',
  styleUrls: ['./edit-table-form.component.scss'],
})
export class EditTableFormComponent {
  formGroup = new FormGroup({
    tableName: new FormControl('', Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<EditTableFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tablesService: TablesService
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
  onCreate(): void {
    console.log(this.formGroup.value.tableName as string, this.data.projectId);

    this.tablesService.editTable(
      this.data.projectId,
      this.data.tableId,
      this.formGroup.value.tableName as string
    );

    this.dialogRef.close();
  }
}
