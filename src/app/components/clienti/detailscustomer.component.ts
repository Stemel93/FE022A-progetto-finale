import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { ClientiService } from '../services/clienti.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detailscustomer',
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
              >{{ customerSelected.nomeContatto }}
              {{ customerSelected.cognomeContatto }}</span
            ><span class="text-black-50">{{ customerSelected.email }}</span
            ><span> </span>
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Dettagli Cliente</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <label class="labels fw-bold">Name</label>
                <p>{{ customerSelected.nomeContatto }}</p>
              </div>
              <div class="col-md-6">
                <label class="labels fw-bold">Cognome</label>
                <p>{{ customerSelected.cognomeContatto }}</p>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels fw-bold">Telefono</label>
                <p>{{ customerSelected.telefono }}</p>
              </div>
              <div class="col-md-12">
                <label class="labels fw-bold">Comune</label>
                <p>
                  {{ customerSelected.indirizzoSedeOperativa.comune.nome }} ({{
                    customerSelected.indirizzoSedeOperativa.comune.provincia
                      .sigla
                  }})
                </p>
              </div>
              <div class="col-md-12">
                <label class="labels fw-bold">Indirizzo Sede Operativa</label>
                <p>
                  {{ customerSelected.indirizzoSedeOperativa.via }}
                </p>
              </div>
              <div class="col-md-12">
                <label class="labels fw-bold">CAP</label>
                <p>
                  {{ customerSelected.indirizzoSedeOperativa.cap }}
                </p>
              </div>
              <div class="col-md-12">
                <label class="labels fw-bold">Ragione Sociale</label>
                <p>
                  {{ customerSelected.ragioneSociale }}
                </p>
              </div>
              <div class="col-md-12">
                <label class="labels fw-bold">Tipologia Cliente</label>
                <p>
                  {{ customerSelected.tipoCliente }}
                </p>
              </div>
              <div class="col-md-12">
                <label class="labels fw-bold">PEC</label>
                <p>
                  {{ customerSelected.pec }}
                </p>
              </div>
              <div class="col-md-12">
                <label class="labels fw-bold">Telefono Aziendale</label>
                <p>
                  {{ customerSelected.telefonoContatto }}
                </p>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <label class="labels fw-bold">P.IVA</label>
                <p>
                  {{ customerSelected.partitaIva }}
                </p>
              </div>
              <div class="col-md-6">
                <label class="labels fw-bold">Email Aziendale</label>
                <p>
                  {{ customerSelected.emailContatto }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class DetailscustomerComponent implements OnInit {
  customerId!: number;
  customerSelected!: Customer;

  constructor(
    private custServ: ClientiService,
    private snapRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.customerId = this.snapRoute.snapshot.params['id'];
    this.custServ.getById(this.customerId).subscribe((response) => {
      this.customerSelected = response;
      console.log(this.customerSelected);
    });
  }
}
