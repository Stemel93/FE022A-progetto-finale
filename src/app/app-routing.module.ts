import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiComponent } from './components/clienti/clienti.component';
import { DashboardComponent } from './components/dashboard.component';
import { DetailscustomerComponent } from './components/clienti/detailscustomer.component';
import { InvoicesComponent } from './components/invoice/invoices.component';
import { DetailsInvoiceComponent } from './components/invoice/details-invoice.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'clienti',
    component: ClientiComponent,
  },
  {
    path: 'clienti/:id',
    component: DetailscustomerComponent,
  },
  {
    path: 'fatture',
    component: InvoicesComponent,
  },
  {
    path: 'fatture/:id',
    component: DetailsInvoiceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
