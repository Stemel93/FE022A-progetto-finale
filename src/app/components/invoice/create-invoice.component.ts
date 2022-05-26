import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/model/invoice';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from '../services/invoice.service';
import { ClientiService } from '../services/clienti.service';
import { Customer } from 'src/app/model/customer';
import { Location } from '@angular/common';
import { NewInvoice } from 'src/app/model/new-invoice';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-invoice',
  template: `
    <div class="container rounded bg-white mt-5 mb-5">
      <div class="row">
        <div class="col-md-3 border-right">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <span> </span>
          </div>
        </div>
        <div class="col-md-5 border-right">
          <form #form="ngForm" (ngSubmit)="prova(form)">
            <div class="p-3 py-5">
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <h4 class="text-right" [ngClass]="{ 'd-none': modal === true }">
                  Nuova Fattura
                </h4>
              </div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <label class="labels fw-bold">Numero Fattura</label
                  ><input
                    type="text"
                    class="form-control"
                    placeholder="N. Fattura"
                    value=""
                    name="numero"
                    ngModel
                    required
                    #numero="ngModel"
                    pattern="^[0-9]+$"
                    [className]="
                      numero.invalid && numero.dirty
                        ? 'form-control is-invalid'
                        : !numero.invalid && numero.dirty
                        ? 'form-control is-valid'
                        : 'form-control'
                    "
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels fw-bold">Anno</label
                  ><input
                    type="text"
                    class="form-control"
                    value=""
                    placeholder="Anno"
                    name="anno"
                    ngModel
                    required
                    pattern="^[12][0-9]{3}$"
                    minLength="4"
                    maxLength="4"
                    #anno="ngModel"
                    [className]="
                      anno.invalid && anno.dirty
                        ? 'form-control is-invalid'
                        : !anno.invalid && anno.dirty
                        ? 'form-control is-valid'
                        : 'form-control'
                    "
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels fw-bold">Importo</label
                  ><input
                    type="text"
                    class="form-control"
                    placeholder="Importo"
                    value=""
                    name="importo"
                    ngModel
                    required
                    pattern="^[0-9]{1,16}([,.][0-9]{1,2})?$"
                    #importo="ngModel"
                    [className]="
                      importo.invalid && importo.dirty
                        ? 'form-control is-invalid'
                        : !importo.invalid && importo.dirty
                        ? 'form-control is-valid'
                        : 'form-control'
                    "
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels fw-bold">Stato</label
                  ><select
                    class="form-select"
                    aria-label="Default select example"
                    name="state"
                    ngModel
                    required
                    #state="ngModel"
                    [className]="
                      state.invalid && state.dirty
                        ? 'form-control is-invalid'
                        : !state.invalid && state.dirty
                        ? 'form-control is-valid'
                        : 'form-control'
                    "
                  >
                    <option value="">Seleziona Stato Fattura</option>
                    <option value="1">PAGATA</option>
                    <option value="2">NON PAGATA</option>
                  </select>

                  <div class="mt-5 text-center">
                    <button
                      class="btn btn-primary"
                      type="submit"
                      [ngClass]="{ disabled: form.invalid === true }"
                    >
                      Salva Fattura
                    </button>
                    <button class="btn btn-danger" (click)="back()">
                      Indietro
                    </button>

                    <!-- inizio modale -->

                    <div
                      [ngClass]="{ 'd-none': modal === false }"
                      id="staticBackdrop"
                      data-backdrop="static"
                      data-keyboard="false"
                      tabindex="1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                          <div class="modal-body">
                            <div class="text-right">
                              <i
                                class="fa fa-close close"
                                data-dismiss="modal"
                              ></i>
                            </div>
                            <div class="row">
                              <div class="col-md-6">
                                <div class="text-center mt-2">
                                  <img
                                    src="https://i.imgur.com/zZUiqsU.png"
                                    width="200"
                                  />
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="text-white mt-4">
                                  <span class="intro-1">FATTURA INSERITA</span>
                                  <div class="mt-2">
                                    <span class="intro-2"
                                      >Potrai visualizzarla nella sezione
                                      "Fatture". A breve sarai reindirizzato
                                      alla Home.
                                    </span>
                                  </div>
                                  <div class="mt-4 mb-5">
                                    <p class="btn btn-primary btn-modal">
                                      Buon Lavoro
                                      <i class="fa fa-cloud-download"></i>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- fine modale -->
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      body {
        background-color: #198754;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .modal-body {
        background-color: #198754;
        border-color: #198754;
        position: absolute;
        bottom: 50%;
      }

      .intro-1 {
        font-size: 20px;
      }

      .close {
        color: #fff;
      }

      .close:hover {
        color: #fff;
      }

      .intro-2 {
        font-size: 13px;
      }

      .btn-modal {
        color: #5165ff;
        background-color: #fffaff;
        border-color: #fffaff;
        padding: 12px;
        font-weight: 700;
        border-radius: 41px;
        padding-right: 20px;
        padding-left: 20px;
        pointer-events: none;
      }
    `,
  ],
})
export class CreateInvoiceComponent implements OnInit {
  customerId!: number;
  customerSelected!: Customer;
  invoiceId!: number;
  invoiceSelected!: NewInvoice;
  currentDate!: Date;
  currentDateGmt!: any;
  modal: boolean = false;

  value1 = 'PAGATA';
  value2 = 'NON PAGATA';

  constructor(
    private invoiceServ: InvoiceService,
    private snapRoute: ActivatedRoute,
    private custServ: ClientiService,
    private location: Location,
    private router: Router
  ) {}

  prova(form: any) {
    this.invoiceSelected = {
      numero: 0,
      anno: 0,
      data: '',
      importo: 0,
      stato: { id: 0, nome: '' },
      cliente: { id: 0 },
    };
    console.log(form);
    console.log(form.valid);

    this.modal = true;

    this.currentDate = new Date();

    this.invoiceSelected.data = this.currentDate.toISOString();
    console.log(this.invoiceSelected.data);

    this.invoiceSelected.numero = +form.value.numero;
    this.invoiceSelected.importo = +form.value.importo;
    this.invoiceSelected.anno = +form.value.anno;
    this.invoiceSelected.stato.id = +form.value.state;
    this.invoiceSelected.cliente.id = this.customerSelected.id;
    if (this.invoiceSelected.stato.id == 1) {
      this.invoiceSelected.stato.nome = 'PAGATA';
    } else {
      this.invoiceSelected.stato.nome = 'NON PAGATA';
    }

    console.log(this.invoiceSelected);

    this.invoiceServ.createFattura(this.invoiceSelected).subscribe();

    setTimeout(() => {
      this.backs();
    }, 2000);

    /* this.backs(); */
  }

  backs(): void {
    this.location.back();
  }
  back() {
    this.router.navigate(['/clienti']);
  }

  /* currentState() {
    this.invoiceServ.loadState(0).subscribe((p) => {
      this.statusFatture = p;
    });
  } */

  ngOnInit(): void {
    this.customerId = this.snapRoute.snapshot.params['id'];
    this.custServ.getById(this.customerId).subscribe((response) => {
      this.customerSelected = response;
      console.log(this.customerSelected);
    });
  }
}
