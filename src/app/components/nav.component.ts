import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <!-- verificare toggled -->
    <div class="d-flex bg-dark" id="wrapper" [ngClass]="{ toggled: toggleNav }">
      <!-- Sidebar -->
      <div class="bg-white" id="sidebar-wrapper">
        <div
          class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"
        >
          <i class="fas fa-user-secret me-2"></i>IamCRM
        </div>
        <div class="list-group list-group-flush my-3">
          <a
            [routerLink]="['/']"
            class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            ><i class="fas fa-tachometer-alt me-2"></i>Dashboard</a
          >
          <a
            [routerLink]="['/clienti']"
            class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            ><i class="fas fa-project-diagram me-2"></i>Clienti</a
          >
          <a
            [routerLink]="['']"
            class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            ><i class="fas fa-users me-2"></i>Users</a
          >
          <a
            href="#"
            class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            ><i class="fas fa-chart-line me-2"></i>Analytics</a
          >
          <a
            [routerLink]="['/fatture']"
            class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            ><i class="fas fa-paperclip me-2"></i>Fatture</a
          >

          <a
            href="#"
            class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            ><i class="fas fa-globe me-2"></i>Login</a
          >
          <a
            href="#"
            class="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
            ><i class="fas fa-power-off me-2"></i>Logout</a
          >
        </div>
      </div>
      <!-- /#sidebar-wrapper -->

      <!-- Page Content -->
      <div id="page-content-wrapper">
        <nav
          class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4"
        >
          <div class="d-flex align-items-center">
            <i
              class="fas fa-align-left primary-text fs-4 me-3"
              id="menu-toggle"
              (click)="toggleButton()"
            ></i>
            <h2 class="fs-2 m-0 text-success">Dashboard</h2>
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle second-text fw-bold text-success"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fas fa-user me-2 text-success"></i>Mauro Migliorino
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item text-success fw-bold" href="#"
                      >Profilo</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item text-success fw-bold" href="#"
                      >Impostazioni</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item text-success fw-bold" href="#"
                      >Logout</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

        <!-- Contenuto -->

        <div class="container-fluid px-4"></div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [
    `
      :root {
        --main-bg-color: #009d63;
        --main-text-color: #009d63;
        --second-text-color: #bbbec5;
        --second-bg-color: #c1efde;
      }

      .primary-text {
        color: #009d63;
      }

      .second-text {
        color: #009d63;
      }

      .primary-bg {
        background-color: #bbbec5;
      }

      .secondary-bg {
        background-color: #c1efde;
      }

      .rounded-full {
        border-radius: 100%;
      }

      #wrapper {
        overflow-x: hidden;
        background-color: black;
      }

      #sidebar-wrapper {
        min-height: 100vh;
        margin-left: -15rem;
        -webkit-transition: margin 0.25s ease-out;
        -moz-transition: margin 0.25s ease-out;
        -o-transition: margin 0.25s ease-out;
        transition: margin 0.25s ease-out;
      }

      #sidebar-wrapper .sidebar-heading {
        padding: 0.875rem 1.25rem;
        font-size: 1.2rem;
      }

      #sidebar-wrapper .list-group {
        width: 15rem;
      }

      #page-content-wrapper {
        min-width: 100vw;
      }

      #wrapper.toggled #sidebar-wrapper {
        margin-left: 0;
      }

      #menu-toggle {
        cursor: pointer;
      }

      .list-group-item {
        border: none;
        padding: 20px 30px;
      }

      .list-group-item.active {
        background-color: transparent;
        color: #bbbec5;
        font-weight: bold;
        border: none;
      }

      @media (min-width: 768px) {
        #sidebar-wrapper {
          margin-left: 0;
        }

        #page-content-wrapper {
          min-width: 0;
          width: 100%;
        }

        #wrapper.toggled #sidebar-wrapper {
          margin-left: -15rem;
        }
      }
    `,
  ],
})
export class NavComponent implements OnInit {
  toggleNav: boolean = true;

  toggleButton() {
    this.toggleNav = !this.toggleNav;
  }

  constructor() {}

  ngOnInit(): void {}
}
