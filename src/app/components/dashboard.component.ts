import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="container-fluid px-4">
      <div class="row g-3 my-2">
        <div class="col-md-3">
          <div
            class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded"
          >
            <div>
              <h3 class="fs-2">720</h3>
              <p class="fs-5">Clienti</p>
            </div>
            <i
              class="fas fa-user me-2 fs-1 primary-text border rounded-full secondary-bg p-3"
            ></i>
          </div>
        </div>

        <div class="col-md-3">
          <div
            class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded"
          >
            <div>
              <h3 class="fs-2">4920</h3>
              <p class="fs-5">Fatture</p>
            </div>
            <i
              class="fas fa-file-invoice-dollar fs-1 primary-text border rounded-full secondary-bg p-3"
            ></i>
          </div>
        </div>

        <div class="col-md-3">
          <div
            class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded"
          >
            <div>
              <h3 class="fs-2">3899</h3>
              <p class="fs-5">Pagate</p>
            </div>
            <i
              class="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"
            ></i>
          </div>
        </div>

        <div class="col-md-3">
          <div
            class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded"
          >
            <div>
              <h3 class="fs-2">25%</h3>
              <p class="fs-5">Aumento</p>
            </div>
            <i
              class="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"
            ></i>
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
    `,
  ],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
