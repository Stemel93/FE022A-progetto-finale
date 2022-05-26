import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/model/invoice';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from '../services/invoice.service';
import { StatoFattura } from 'src/app/model/stato-fattura';

@Component({
  selector: 'app-details-invoice',
  template: `
    <div class="container rounded bg-white mt-5 mb-5">
      <div class="row">
        <div class="col-md-3 border-right">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <img
              class="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            /><span class="font-weight-bold"
              >{{ invoiceSelected.cliente.nomeContatto }}
              {{ invoiceSelected.cliente.cognomeContatto }} </span
            ><span class="text-black-50">{{
              invoiceSelected.cliente.email
            }}</span
            ><span> </span>
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">
                {{ invoiceSelected.cliente.ragioneSociale }}
              </h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <label class="labels fw-bold">P.IVA</label>
                <p>{{ invoiceSelected.cliente.partitaIva }}</p>
              </div>
              <div class="col-md-6">
                <label class="labels fw-bold">Pec</label>
                <p>{{ invoiceSelected.cliente.pec }}</p>
              </div>
              <div
                class="d-flex justify-content-between align-items-center mt-3"
              >
                <h4 class="text-right">Dettaglio Fattura</h4>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels fw-bold">Data Fattura</label>
                <p>{{ invoiceSelected.data | date: 'medium' }}</p>
              </div>
              <div class="col-md-12">
                <label class="labels fw-bold">Numero Fattura</label>
                <p>{{ invoiceSelected.numero }}</p>
              </div>
              <div class="col-md-12">
                <label class="labels fw-bold">Importo</label>
                <p>{{ invoiceSelected.importo | currency: 'EUR' }}</p>
              </div>
              <div class="col-md-12">
                <form #form="ngForm" (ngSubmit)="prova(form)">
                  <label class="labels fw-bold">Stato Fattura</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    name="state"
                    ngModel
                  >
                    <option disabled>Seleziona Stato Fattura</option>
                    <option value="1">PAGATA</option>
                    <option value="2">NON PAGATA</option>
                  </select>
                  <button class="btn btn-primary" type="submit">
                    Conferma
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class EditInvoiceComponent implements OnInit {
  invoiceId!: number;
  invoiceSelected!: Invoice;
  /* statusFatture!: StatoFattura[]; */
  value1 = 'PAGATA';
  value2 = 'NON PAGATA';

  constructor(
    private invoiceServ: InvoiceService,
    private snapRoute: ActivatedRoute
  ) {}

  prova(form: any) {
    console.log(form.value.state);
    this.invoiceSelected.stato.id = form.value.state;
    if (this.invoiceSelected.stato.id == 1) {
      this.invoiceSelected.stato.nome = 'PAGATA';
    } else {
      this.invoiceSelected.stato.nome = 'NON PAGATA';
    }

    console.log(this.invoiceSelected);
    this.invoiceServ
      .nuovo(this.invoiceSelected.id!, this.invoiceSelected)
      .subscribe();
  }

  /* currentState() {
    this.invoiceServ.loadState(0).subscribe((p) => {
      this.statusFatture = p;
    });
  } */

  ngOnInit(): void {
    this.invoiceId = this.snapRoute.snapshot.params['id'];
    this.invoiceServ.getById(this.invoiceId).subscribe((response) => {
      this.invoiceSelected = response;
      console.log(this.invoiceSelected);
    });
  }
}
