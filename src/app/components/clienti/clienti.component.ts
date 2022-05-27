import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientiService } from '../services/clienti.service';

import { VoiceRecognitionService } from '../services/voice-recognition.service';

@Component({
  providers: [VoiceRecognitionService],
  selector: 'app-clienti',
  template: `
    <div class="container-fluid px-4">
      <div class="row g-3 my-2">
        <div class="col-md-3 mx-auto">
          <div
            class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded"
          >
            <div>
              <h3 class="fs-2">Clienti</h3>
            </div>
            <i
              class="fas fa-users me-2 fs-1 primary-text border rounded-full secondary-bg p-3"
            ></i>
          </div>
        </div>

        <div class="row my-5">
          <h3 class="fs-4 mb-3">Recent Orders</h3>

          <div class="col">
            <!-- mic -->

            <div class="container">
              <br />
              <div class="row justify-content-center">
                <!-- mic -->

                <!-- mic -->
                <div class="col-12 col-md-10 col-lg-8">
                  <button class="btn btn-primary ms-5" (click)="startService()">
                    <i class="bi bi-mic-fill"></i>
                  </button>
                  <button class="btn btn-danger" (click)="stopService()">
                    <i class="bi bi-mic-mute-fill"></i>
                  </button>
                  <form
                    class="card card-sm bg-dark "
                    #form="ngForm"
                    (ngSubmit)="search(form)"
                  >
                    <div
                      class="card-body row no-gutters align-items-center bg-dark"
                    >
                      <div class="col-auto">
                        <i class="bi bi-search text-white h4"></i>
                      </div>
                      <!--end of col-->

                      <div class="col">
                        <input
                          class="form-control form-control-lg form-control-borderless ps-5"
                          type="text"
                          value="{{ service.text }}"
                          placeholder="La ricerca è Case Sensitive"
                          name="ragioneSociale"
                          ngModel
                        />
                      </div>
                      <!--end of col-->
                      <div class="col-auto">
                        <button class="btn btn-lg btn-success" type="submit">
                          Cerca Cliente
                        </button>
                      </div>

                      <!--end of col-->
                    </div>
                  </form>
                </div>
                <!--end of col-->
              </div>
            </div>

            <!-- mic -->
            <button
              type="button"
              class="btn btn-success w-25 fw-bold"
              [routerLink]="['/newcustomer']"
            >
              <i class="bi bi-plus-lg"></i> Aggiungi Cliente
            </button>
            <table class="table bg-white rounded shadow-sm  table-hover">
              <thead>
                <tr>
                  <th scope="col" width="50" class="text-success">ID</th>
                  <th scope="col">Ragione Sociale</th>
                  <th scope="col">Email</th>
                  <th scope="col">P.Iva</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let cliente of clienti; let i = index">
                  <td scope="row" class="fw-bold">{{ cliente.id }}</td>
                  <td>{{ cliente.ragioneSociale }}</td>
                  <td>{{ cliente.pec }}</td>
                  <td>{{ cliente.partitaIva }}</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic checkbox toggle button group"
                    >
                      <input
                        type="checkbox"
                        class="btn-check"
                        id="btncheck1"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-primary"
                        for="btncheck1"
                        [routerLink]="['/clienti', cliente.id]"
                        ><i class="bi bi-file-earmark-person-fill"></i
                      ></label>

                      <input
                        type="checkbox"
                        class="btn-check"
                        id="btncheck2"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-success"
                        for="btncheck2"
                        [routerLink]="['/newfatture', cliente.id]"
                        ><i class="bi bi-plus-square"></i
                      ></label>

                      <input
                        type="checkbox"
                        class="btn-check"
                        id="btncheck2"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-warning"
                        for="btncheck2"
                        [routerLink]="['/editclienti', cliente.id]"
                        ><i class="bi bi-pencil-fill"></i
                      ></label>

                      <input
                        type="checkbox"
                        class="btn-check"
                        id="btncheck3"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-danger"
                        for="btncheck3"
                        (click)="deleteCliente(cliente.id)"
                        ><i class="bi bi-x-circle-fill"></i
                      ></label>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <nav aria-label="..." class="mx-auto">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" (click)="firstPage()">Inizio</a>
                </li>
                <li class="page-item">
                  <a class="page-link" id="1" (click)="onTableDataChange(0)"
                    >1</a
                  >
                </li>
                <li class="page-item">
                  <a class="page-link" id="2" (click)="onTableDataChange(1)"
                    >2</a
                  >
                </li>
                <li class="page-item" (click)="onTableDataChange(2)">
                  <a class="page-link" id="3">3</a>
                </li>
                <li class="page-item">
                  <a class="page-link" id="4" (click)="onTableDataChange(3)"
                    >4</a
                  >
                </li>
                <li class="page-item">
                  <a class="page-link" id="5" (click)="onTableDataChange(4)"
                    >5</a
                  >
                </li>
                <li class="page-item">
                  <a class="page-link" (click)="lastPage()">Fine</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .secondary-bg {
        background-color: #c1efde;
      }

      .rounded-full {
        border-radius: 100%;
      }

      td {
        vertical-align: middle;
      }

      .aactive {
        background-color: #0d6efd;
        color: white;
      }
      .page-link {
        cursor: pointer;
      }
      /* input */

      .form-control-borderless {
        border: none;
      }

      .form-control-borderless:hover,
      .form-control-borderless:active,
      .form-control-borderless:focus {
        border: none;
        outline: none;
        box-shadow: none;
      }

      .bi-search {
        position: relative;
        left: 2.5em;

        color: black !important;
      }

      /*  ::placeholder {
        padding-left: 1em;
      } */
    `,
  ],
})
export class ClientiComponent implements OnInit {
  page: any = 0;
  items!: any;
  clienti!: any;
  clientiTotali!: any;
  numClienti!: number;
  itemsTotali!: any;
  elements!: any;
  vocale!: string;

  array: any;

  text!: string;

  constructor(
    private custServ: ClientiService,

    public service: VoiceRecognitionService
  ) {
    this.service.init();
  }

  ngOnInit(): void {
    this.getAllClients();
    this.getAllClientsNoPage();
  }

  getAllClients() {
    this.custServ.getAll(this.page).subscribe((data) => {
      this.items = data;
      this.clienti = this.items.content;

      /*  console.log(this.clienti); */
      this.page = 0;
    });
  }

  deleteCliente(id: number) {
    this.custServ.deleteCustomer(id).subscribe(() => {
      this.getAllClients();
    });
  }

  getAllClientsNoPage() {
    this.custServ.getAllNoPage().subscribe((data) => {
      this.itemsTotali = data;
      this.clientiTotali = this.itemsTotali.content;
      this.numClienti = this.clientiTotali.length;
    });
  }

  onTableDataChange(pages: any) {
    this.page = pages;
    this.elements = document.getElementById(pages + 1);
    for (let index: any = 0; index < 5; index++) {
      const element = document.getElementById(index + 1);
      element?.classList.remove('aactive');
    }
    this.elements.classList.add('aactive');
    this.getAllClients();
  }

  lastPage() {
    this.page = Math.floor(this.numClienti / 20);

    this.getAllClients();
    console.log(this.page);
  }

  firstPage() {
    this.page = 0;
    this.getAllClients();
  }

  search(form: any) {
    console.log(form.value.ragioneSociale);
    form.value.ragioneSociale = this.vocale;
    if (form.value.ragioneSociale === '') {
      this.page = 0;
      this.getAllClients();
    } else {
      form.value.ragioneSociale = this.service.text;
      this.custServ
        .getByAzienda(form.value.ragioneSociale)
        .subscribe((data) => {
          this.items = data;
          this.clienti = this.items.content;
        });
      this.vocale = '';
    }
  }

  /* mic */

  startService() {
    this.service.start();
    this.service.text = '';
  }

  stopService() {
    this.service.stop();
    this.vocale = this.service.text;
  }
}
