import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss'],
})
export class InvoiceFormComponent implements OnInit {
  invoiceForm = this.fb.group({
    issuer: this.fb.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      postalCode: ['', Validators.required],
      nip: ['', Validators.required],
      bankAccount: ['', Validators.required],
    }),
    client: this.fb.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      postalCode: ['', Validators.required],
      nip: [''],
    }),
    invoiceNumber: ['', Validators.required],
    issueDate: ['', Validators.required],
    saleDate: ['', Validators.required],
    paymentDeadline: ['', Validators.required],
    paymentMethod: ['', Validators.required],
    invoiceItems: this.fb.array([
      this.fb.group({
        name: ['', Validators.required],
        quantity: ['', Validators.required],
        unit: ['', Validators.required],
        netPrice: ['', Validators.required],
        vatRate: ['', Validators.required],
        netValue: [''],
        grossValue: [''],
      }),
    ]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  get invoiceItems() {
    return this.invoiceForm.get('invoiceItems') as FormArray;
  }

  addInvoiceItem() {
    this.invoiceItems.push(
      this.fb.group({
        name: ['', Validators.required],
        quantity: ['', Validators.required],
        unit: ['', Validators.required],
        netPrice: ['', Validators.required],
        vatRate: ['', Validators.required],
        netValue: [''],
        grossValue: [''],
      })
    );
  }

  onSubmit() {
    // handle form submission here
    console.log(this.invoiceForm.value);
  }
}
