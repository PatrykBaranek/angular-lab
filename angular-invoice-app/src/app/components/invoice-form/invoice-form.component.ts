import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss'],
})
export class InvoiceFormComponent implements OnInit {
  invoiceForm!: FormGroup;

  ngOnInit() {
    this.invoiceForm = new FormGroup({
      invoiceNumber: new FormControl(''),
      date: new FormControl(''),
      customerName: new FormControl(''),
      amount: new FormControl(''),
    });
  }

  onSubmit() {
    // handle form submission here
    console.log(this.invoiceForm.value);
  }
}
