import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-users',
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
                  <th scope="col">User</th>
                  <th scope="col">Email</th>
                  <th scope="col">Ruoli</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let cliente of clienti; let i = index">
                  <td scope="row" class="fw-bold">{{ cliente.id }}</td>
                  <td>{{ cliente.username }}</td>
                  <td>{{ cliente.email }}</td>
                  <td *ngFor="let ruolo of cliente.roles">
                    {{ ruolo.roleName }}
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
    `,
  ],
})
export class UsersComponent implements OnInit {
  page: any = 0;
  items!: any;
  clienti!: any;
  clientiTotali!: any;
  numClienti!: number;
  itemsTotali!: any;
  elements!: any;

  array: any;

  constructor(private custServ: ClientiService) {}

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients() {
    this.custServ.getAllUsers().subscribe((data) => {
      this.items = data;
      this.clienti = this.items.content;
      console.log(this.clienti);

      /*  console.log(this.clienti); */
      this.page = 0;
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
  }

  lastPage() {
    this.page = Math.floor(this.numClienti / 20);

    console.log(this.page);
  }

  firstPage() {
    this.page = 0;
  }
}
