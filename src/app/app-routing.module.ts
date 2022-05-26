import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiComponent } from './components/clienti/clienti.component';
import { DashboardComponent } from './components/dashboard.component';
import { DetailscustomerComponent } from './components/clienti/detailscustomer.component';
import { InvoicesComponent } from './components/invoice/invoices.component';
import { DetailsInvoiceComponent } from './components/invoice/details-invoice.component';
import { EditInvoiceComponent } from './components/invoice/edit-invoice.component';
import { CreateInvoiceComponent } from './components/invoice/create-invoice.component';
import { CreateCustomerComponent } from './components/clienti/create-customer.component';
import { EditCustomerComponent } from './components/clienti/edit-customer.component';
import { LoginComponent } from './auth/login.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { SignupComponent } from './auth/signup.component';
import { UsersComponent } from './components/user/users.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: DashboardComponent,
  },
  {
    path: 'clienti',
    canActivate: [AuthGuard],
    component: ClientiComponent,
  },
  {
    path: 'clienti/:id',
    canActivate: [AuthGuard],
    component: DetailscustomerComponent,
  },
  {
    path: 'editclienti/:id',
    canActivate: [AuthGuard],
    component: EditCustomerComponent,
  },
  {
    path: 'fatture',
    canActivate: [AuthGuard],
    component: InvoicesComponent,
  },
  {
    path: 'fatture/:id',
    canActivate: [AuthGuard],
    component: DetailsInvoiceComponent,
  },
  {
    path: 'editfatture/:id',
    canActivate: [AuthGuard],
    component: EditInvoiceComponent,
  },
  {
    path: 'newfatture/:id',
    component: CreateInvoiceComponent,
  },

  {
    path: 'newcustomer',
    canActivate: [AuthGuard],
    component: CreateCustomerComponent,
  },
  {
    path: 'login',

    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    component: UsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
