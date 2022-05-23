import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav.component';
import { DashboardComponent } from './components/dashboard.component';
import { ClientiComponent } from './components/clienti/clienti.component';
import { CreateCustomerComponent } from './components/clienti/create-customer.component';
import { InvoicesComponent } from './components/invoice/invoices.component';
import { CreateInvoiceComponent } from './components/invoice/create-invoice.component';
import { UsersComponent } from './components/user/users.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import { DetailscustomerComponent } from './components/clienti/detailscustomer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailsInvoiceComponent } from './components/invoice/details-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    ClientiComponent,
    CreateCustomerComponent,
    InvoicesComponent,
    CreateInvoiceComponent,
    UsersComponent,
    DetailscustomerComponent,
    DetailsInvoiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
