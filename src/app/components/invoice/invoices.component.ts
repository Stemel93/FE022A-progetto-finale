import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../services/invoice.service';

@Component({
  selector: 'app-invoices',
  template: `
    <div class="container-fluid px-4">
      <div class="row g-3 my-2">
        <div class="col-md-3 mx-auto">
          <div
            class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded"
          >
            <div>
              <h3 class="fs-2">Fatture</h3>
            </div>
            <i
              class="fas fa-file-invoice-dollar fs-1 primary-text border rounded-full secondary-bg p-3"
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
                  <th scope="col">Data</th>
                  <th scope="col">Importo</th>
                  <th scope="col">Stato</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let fattura of fatture; let i = index">
                  <td scope="row" class="fw-bold">{{ fattura.id }}</td>
                  <td>{{ fattura.cliente.ragioneSociale }}</td>
                  <td>{{ fattura.data | date: 'medium' }}</td>
                  <td>{{ fattura.importo | currency: 'EUR' }}</td>
                  <td
                    [ngClass]="
                      fattura.stato.nome == 'NON PAGATA'
                        ? 'text-danger'
                        : 'text-success'
                    "
                  >
                    {{ fattura.stato.nome }}
                  </td>
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
                        [routerLink]="['/clienti']"
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
export class InvoicesComponent implements OnInit {
  page: number = 0;
  fatture!: any;
  items!: any;

  constructor(private invoiceServ: InvoiceService) {}

  ngOnInit(): void {
    this.getAllInvoices();
  }

  getAllInvoices() {
    this.invoiceServ.getAll(this.page).subscribe((data) => {
      this.items = data;
      this.fatture = this.items.content;
      console.log(this.items);
      console.log(this.fatture);
    });
  }
}
