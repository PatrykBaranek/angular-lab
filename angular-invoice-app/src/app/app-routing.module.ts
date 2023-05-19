import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InvoiceDetailsComponent } from './components/invoice-details/invoice-details.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'invoice/new', component: InvoiceFormComponent },
  { path: 'invoice/edit/:id', component: InvoiceFormComponent },
  { path: 'invoices', component: InvoiceListComponent },
  { path: 'invoice/:id', component: InvoiceDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
