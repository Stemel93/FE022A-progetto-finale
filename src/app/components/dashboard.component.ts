import { Component, OnInit } from '@angular/core';
import { ClientiService } from './services/clienti.service';
import { InvoiceService } from './services/invoice.service';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="col-md-10 ms-5 mt-5">
      <div class="row ">
        <div class="col-xl-3 col-lg-6">
          <div class="card l-bg-cherry">
            <div class="card-statistic-3 p-4">
              <div class="card-icon card-icon-large">
                <i class="fas fa-shopping-cart"></i>
              </div>
              <div class="mb-4">
                <h5 class="card-title mb-0">Nuovi Ordini</h5>
              </div>
              <div class="row align-items-center mb-2 d-flex">
                <div class="col-8">
                  <h2 class="d-flex align-items-center mb-0">324</h2>
                </div>
                <div class="col-4 text-right">
                  <span>12.5% <i class="fa fa-arrow-up"></i></span>
                </div>
              </div>
              <div class="progress mt-1 " data-height="8" style="height: 8px;">
                <div
                  class="progress-bar l-bg-cyan"
                  role="progressbar"
                  data-width="25%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 25%;"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6">
          <div class="card l-bg-blue-dark">
            <div class="card-statistic-3 p-4">
              <div class="card-icon card-icon-large">
                <i class="fas fa-users"></i>
              </div>
              <div class="mb-4">
                <h5 class="card-title mb-0">Clienti</h5>
              </div>
              <div class="row align-items-center mb-2 d-flex">
                <div class="col-8">
                  <h2 class="d-flex align-items-center mb-0">
                    {{ numClienti }}
                  </h2>
                </div>
                <div class="col-4 text-right">
                  <span>9.23% <i class="fa fa-arrow-up"></i></span>
                </div>
              </div>
              <div class="progress mt-1 " data-height="8" style="height: 8px;">
                <div
                  class="progress-bar l-bg-green"
                  role="progressbar"
                  data-width="25%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 25%;"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6">
          <div class="card l-bg-green-dark">
            <div class="card-statistic-3 p-4">
              <div class="card-icon card-icon-large">
                <i class="fas fa-ticket-alt"></i>
              </div>
              <div class="mb-4">
                <h5 class="card-title mb-0">Fatture</h5>
              </div>
              <div class="row align-items-center mb-2 d-flex">
                <div class="col-8">
                  <h2 class="d-flex align-items-center mb-0">
                    {{ numInvoice }}
                  </h2>
                </div>
                <div class="col-4 text-right">
                  <span>10% <i class="fa fa-arrow-up"></i></span>
                </div>
              </div>
              <div class="progress mt-1 " data-height="8" style="height: 8px;">
                <div
                  class="progress-bar l-bg-orange"
                  role="progressbar"
                  data-width="25%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 25%;"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6">
          <div class="card l-bg-orange-dark">
            <div class="card-statistic-3 p-4">
              <div class="card-icon card-icon-large">
                <i class="fas fa-dollar-sign"></i>
              </div>
              <div class="mb-4">
                <h5 class="card-title mb-0">Fatturato Mensile</h5>
              </div>
              <div class="row align-items-center mb-2 d-flex">
                <div class="col-8">
                  <h2 class="d-flex align-items-center mb-0">21.610€</h2>
                </div>
                <div class="col-4 text-right">
                  <span>2.5% <i class="fa fa-arrow-up"></i></span>
                </div>
              </div>
              <div class="progress mt-1 " data-height="8" style="height: 8px;">
                <div
                  class="progress-bar l-bg-cyan"
                  role="progressbar"
                  data-width="25%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 25%;"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- prova -->

    <div class="container-fluid mb-5">
      <div class="text-center mt-5">
        <h1>Our Services</h1>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="box">
            <div class="our-services settings">
              <div class="icon">
                <img src="https://i.imgur.com/6NKPrhO.png" />
              </div>
              <h4>Impostazioni</h4>
              <p>
                Modifica le impostazioni dell'app in base alle tue preferenze
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box">
            <div class="our-services speedup">
              <div class="icon">
                <img src="https://i.imgur.com/KMbnpFF.png" />
              </div>
              <h4>Analytics</h4>
              <p>Controlla l'andamento della tua azienda</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box">
            <div class="our-services privacy">
              <div class="icon">
                <img src="https://i.imgur.com/AgyneKA.png" />
              </div>
              <h4>Privacy</h4>
              <p>Controlla e gestisci i permessi dei tuoi dipendenti</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4" [routerLink]="['/fatture']">
          <div class="box">
            <div class="our-services backups">
              <div class="icon">
                <img src="https://i.imgur.com/vdH9LKi.png" />
              </div>
              <h4>Fatture</h4>
              <p>Gestisci, elimina e crea nuove fatture</p>
            </div>
          </div>
        </div>
        <div class="col-md-4" [routerLink]="['/users']">
          <div class="box">
            <div class="our-services ssl">
              <div class="icon">
                <img src="https://i.imgur.com/v6OnUqu.png" />
              </div>
              <h4>Gestione Utenti</h4>
              <p>Controlla gli utenti registrati e i loro permessi</p>
            </div>
          </div>
        </div>
        <div class="col-md-4" [routerLink]="['/clienti']">
          <div class="box">
            <div class="our-services database">
              <div class="icon">
                <img src="https://i.imgur.com/VzjZw9M.png" />
              </div>
              <h4>Database Clienti</h4>
              <p>Crea nuovi clienti o gesti quelli già esistenti</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- prova -->

    <section class="counter">
      <div class="container">
        <div class="counter__content">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter__item">
                <div class="counter__item__text">
                  <i class="icon fas fa-project-diagram fa-3x"></i>
                  <h2 class="counter_num">23</h2>
                  <p>Filiali Correnti</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter__item second__item">
                <div class="counter__item__text">
                  <i class="icon far fa-smile-beam fa-3x"></i>
                  <h2 class="counter_num">91%</h2>
                  <p>Clienti Felici</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter__item third__item">
                <div class="counter__item__text">
                  <i class="icon fas fa-chalkboard-teacher fa-3x"></i>
                  <h2 class="counter_num">230</h2>
                  <p>Dipendenti</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter__item four__item">
                <div class="counter__item__text">
                  <i class="icon fas fa-list-alt fa-3x"></i>
                  <h2 class="counter_num">495</h2>
                  <p>Progetti Completati</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .secondary-bg {
        background-color: #c1efde;
      }

      .rounded-full {
        border-radius: 100%;
      }

      /* prova */

      .card {
        background-color: #fff;
        border-radius: 10px;
        border: none;
        position: relative;
        margin-bottom: 30px;
        box-shadow: 0 0.46875rem 2.1875rem rgba(90, 97, 105, 0.1),
          0 0.9375rem 1.40625rem rgba(90, 97, 105, 0.1),
          0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12),
          0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);
      }
      .l-bg-cherry {
        background: linear-gradient(to right, #493240, #f09) !important;
        color: #fff;
      }

      .l-bg-blue-dark {
        background: linear-gradient(to right, #373b44, #4286f4) !important;
        color: #fff;
      }

      .l-bg-green-dark {
        background: linear-gradient(to right, #0a504a, #38ef7d) !important;
        color: #fff;
      }

      .l-bg-orange-dark {
        background: linear-gradient(to right, #a86008, #ffba56) !important;
        color: #fff;
      }

      .card .card-statistic-3 .card-icon-large .fas,
      .card .card-statistic-3 .card-icon-large .far,
      .card .card-statistic-3 .card-icon-large .fab,
      .card .card-statistic-3 .card-icon-large .fal {
        font-size: 110px;
      }

      .card .card-statistic-3 .card-icon {
        text-align: center;
        line-height: 50px;
        margin-left: 15px;
        color: #000;
        position: absolute;
        right: -5px;
        top: 20px;
        opacity: 0.1;
      }

      .l-bg-cyan {
        background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
        color: #fff;
      }

      .l-bg-green {
        background: linear-gradient(
          135deg,
          #23bdb8 0%,
          #43e794 100%
        ) !important;
        color: #fff;
      }

      .l-bg-orange {
        background: linear-gradient(to right, #f9900e, #ffba56) !important;
        color: #fff;
      }

      .l-bg-cyan {
        background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
        color: #fff;
      }

      /* prova2 */

      .counter {
        background: #212529;
        height: 840px;
        padding-top: 380px;
        overflow: hidden;
      }

      .counter__content {
        padding: 0px 50px;
      }

      .counter__item {
        background: #198754;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        height: 255px;
        width: 255px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        text-align: center;
        position: relative;
        z-index: 1;
      }
      .counter__item::before {
        position: absolute;
        left: -1px;
        bottom: -2px;
        height: 636px;
        width: 636px;

        content: '';
        z-index: -1;
      }
      .counter__item.second__item {
        margin-top: -185px;
      }
      .counter__item.second__item:before {
        left: -316px;
        bottom: -65px;

        border-left: none;
        border-top: none;
      }
      .counter__item.four__item {
        margin-top: -185px;
      }
      .counter__item.four__item:before {
        left: -380px;
        bottom: -380px;

        border-left: none;
        border-top: none;
      }
      .counter__item.third__item:before {
        left: -65px;
        bottom: -317px;
      }

      .counter__item__text {
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
      .counter__item__text h2 {
        font-size: 60px;
        color: #ffffff;
        font-weight: 700;
        margin-bottom: 6px;
        margin-top: 18px;
      }
      .counter__item__text p {
        color: #ffffff;
        margin-bottom: 0;
      }
      .counter__item__text .icon {
        color: #ffc107;
      }

      /* schede */

      @import url('https://fonts.googleapis.com/css?family=Poppins|Ubuntu&display=swap');

      body {
        background: #eee;
        font-family: 'Ubuntu', sans-serif;
      }
      .box {
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
      }
      .our-services {
        margin-top: 75px;
        padding-bottom: 30px;
        padding: 0 60px;
        min-height: 198px;
        text-align: center;
        border-radius: 10px;
        background-color: #fff;
        transition: all 0.4s ease-in-out;
        box-shadow: 0 0 25px 0 rgba(20, 27, 202, 0.17);
      }
      .our-services .icon {
        margin-bottom: -21px;
        transform: translateY(-50%);
        text-align: center;
      }
      .our-services:hover h4,
      .our-services:hover p {
        color: #fff;
      }
      .speedup:hover {
        box-shadow: 0 0 25px 0 rgba(20, 27, 201, 0.05);
        cursor: pointer;
        background-image: linear-gradient(-45deg, #fb0054 0%, #f55b2a 100%);
      }
      .settings:hover {
        box-shadow: 0 0 25px 0 rgba(20, 27, 201, 0.05);
        cursor: pointer;
        background-image: linear-gradient(-45deg, #34b5bf 0%, #210c59 100%);
      }
      .privacy:hover {
        box-shadow: 0 0 25px 0 rgba(20, 27, 201, 0.05);
        cursor: pointer;
        background-image: linear-gradient(-45deg, #3615e7 0%, #44a2f6 100%);
      }
      .backups:hover {
        box-shadow: 0 0 25px 0 rgba(20, 27, 201, 0.05);
        cursor: pointer;
        background-image: linear-gradient(-45deg, #fc6a0e 0%, #fdb642 100%);
      }
      .ssl:hover {
        box-shadow: 0 0 25px 0 rgba(20, 27, 201, 0.05);
        cursor: pointer;
        background-image: linear-gradient(-45deg, #8d40fb 0%, #5a57fb 100%);
      }
      .database:hover {
        box-shadow: 0 0 25px 0 rgba(20, 27, 201, 0.05);
        cursor: pointer;
        background-image: linear-gradient(-45deg, #27b88d 0%, #22dd73 100%);
      }
    `,
  ],
})
export class DashboardComponent implements OnInit {
  constructor(
    private custServ: ClientiService,
    private invoiceServ: InvoiceService
  ) {}

  items!: any;
  numClienti!: number;
  numInvoice!: number;

  ngOnInit(): void {
    this.getAllClients();
    this.getInvoices();
  }

  getAllClients() {
    this.custServ.getAll(0).subscribe((data) => {
      this.items = data;
      this.numClienti = data.totalElements;
    });
  }

  getInvoices() {
    this.invoiceServ.getAll(0).subscribe((data) => {
      this.items = data;
      this.numInvoice = data.totalElements;
    });
  }
}
