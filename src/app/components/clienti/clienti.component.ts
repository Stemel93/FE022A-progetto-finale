import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientiService } from '../services/clienti.service';

@Component({
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
                      <label class="btn btn-outline-warning" for="btncheck2"
                        ><i class="bi bi-pencil-fill"></i
                      ></label>

                      <input
                        type="checkbox"
                        class="btn-check"
                        id="btncheck3"
                        autocomplete="off"
                      />
                      <label class="btn btn-outline-danger" for="btncheck3"
                        ><i class="bi bi-x-circle-fill"></i
                      ></label>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <nav aria-label="..." class="mx-auto">
              <ul class="pagination">
                <li class="page-item disabled">
                  <a class="page-link">Inizio</a>
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
                  <a class="page-link" href="#">Fine</a>
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
    `,
  ],
})
export class ClientiComponent implements OnInit {
  page: any = 0;
  items!: any;
  clienti!: any;

  elements!: any;

  constructor(private custServ: ClientiService) {}

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients() {
    this.custServ.getAll(this.page).subscribe((data) => {
      this.items = data;
      this.clienti = this.items.content;
      console.log(this.items);
      console.log(this.clienti);
      this.page = 0;
      console.log(this.elements);
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
}
