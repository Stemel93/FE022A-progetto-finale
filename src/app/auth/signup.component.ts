import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  template: `
    <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <div class="card card0 border-0">
        <div class="row d-flex">
          <div class="col-lg-6">
            <div class="card1 pb-5">
              <div class="row">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/boise-cascade-1.svg"
                  class="logo"
                />
              </div>
              <div
                class="row px-3 justify-content-center mt-4 mb-5 border-line"
              >
                <img src="https://i.imgur.com/uNGdWHi.png" class="image" />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card2 card border-0 px-4 py-5">
              <h2 class="text-center">Registrati</h2>
              <form #form="ngForm" (ngSubmit)="onSubmit(form)">
                <div class="row px-3">
                  <label class="mb-1"
                    ><h6 class="mb-0 text-sm">Username</h6></label
                  >
                  <input
                    class="mb-4 form-control"
                    type="text"
                    name="username"
                    ngModel
                    placeholder="Inserisci Username"
                    required
                  />
                </div>
                <div class="row px-3">
                  <label class="mb-1"
                    ><h6 class="mb-0 text-sm">Email</h6></label
                  >
                  <input
                    class="mb-4 form-control"
                    type="text"
                    name="email"
                    ngModel
                    placeholder="Inserisci Email valida"
                    required
                  />
                </div>
                <div class="row px-3">
                  <label class="mb-1"
                    ><h6 class="mb-0 text-sm">Password</h6></label
                  >
                  <input
                    class="form-control"
                    ngModel
                    type="password"
                    name="password"
                    placeholder="Inserisci password"
                    required
                  />
                </div>
                <div class="row px-3">
                  <label class="mb-1"
                    ><h6 class="mb-0 text-sm">Ruolo</h6></label
                  >
                  <select
                    class="form-control"
                    ngModel
                    type="text"
                    name="role"
                    required
                  >
                    <option value="">Seleziona un ruolo</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>

                <div class="row mb-3 px-3 mt-3">
                  <button
                    type="submit"
                    class="btn btn-blue text-center"
                    [ngClass]="{ disabled: form.invalid }"
                  >
                    Registrati
                  </button>
                </div>
              </form>
              <div class="row mb-4 px-3">
                <small class="font-weight-bold"
                  >Hai gia un account?
                  <a class="text-danger" [routerLink]="['/login']"
                    >Accedi</a
                  ></small
                >
              </div>
            </div>
          </div>
        </div>
        <div class="bg-blue py-4">
          <div class="row px-3">
            <small class="ml-4 ml-sm-5 mb-2"
              >Copyright &copy; 2021. All rights reserved.</small
            >
            <div class="social-contact ml-4 ml-sm-auto">
              <span class="fa fa-facebook mr-4 text-sm"></span>
              <span class="fa fa-google-plus mr-4 text-sm"></span>
              <span class="fa fa-linkedin mr-4 text-sm"></span>
              <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .card0 {
        box-shadow: 0px 4px 8px 0px #757575;
        border-radius: 0px;
      }

      .card2 {
        margin: 0px 40px;
      }

      .logo {
        width: 200px;
        height: 100px;
        margin-top: 20px;
        margin-left: 35px;
      }

      .image {
        width: 360px;
        height: 280px;
      }

      .border-line {
        border-right: 1px solid #eeeeee;
      }

      .line {
        height: 1px;
        width: 35%;
        background-color: #e0e0e0;
        margin-top: 10px;
      }

      .or {
        width: 10%;
        font-weight: bold;
      }

      .text-sm {
        font-size: 14px !important;
      }

      ::placeholder {
        color: #bdbdbd;
        opacity: 1;
        font-weight: 300;
      }

      :-ms-input-placeholder {
        color: #bdbdbd;
        font-weight: 300;
      }

      ::-ms-input-placeholder {
        color: #bdbdbd;
        font-weight: 300;
      }

      input,
      textarea {
        padding: 10px 12px 10px 12px;
        border: 1px solid lightgrey;
        border-radius: 2px;
        margin-bottom: 5px;
        margin-top: 2px;
        width: 100%;
        box-sizing: border-box;
        color: #2c3e50;
        font-size: 14px;
        letter-spacing: 1px;
      }

      input:focus,
      textarea:focus {
        -moz-box-shadow: none !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
        border: 1px solid #304ffe;
        outline-width: 0;
      }

      button:focus {
        -moz-box-shadow: none !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
        outline-width: 0;
      }

      a {
        color: inherit;
        cursor: pointer;
      }

      .btn-blue {
        background-color: #1a237e;
        width: 150px;
        color: #fff;
        border-radius: 2px;
      }

      .btn-blue:hover {
        background-color: #000;
        cursor: pointer;
      }

      .bg-blue {
        color: #fff;
        background: linear-gradient(to right, #0a504a, #38ef7d) !important;
      }

      @media screen and (max-width: 991px) {
        .logo {
          margin-left: 0px;
        }

        .image {
          width: 300px;
          height: 220px;
        }

        .border-line {
          border-right: none;
        }

        .card2 {
          border-top: 1px solid #eeeeee !important;
          margin: 0px 15px;
        }
      }
    `,
  ],
})
export class SignupComponent implements OnInit {
  newUser = {
    username: '',
    email: '',
    password: '',
    role: [''],
  };

  constructor(private authSrv: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async onSubmit(form: any) {
    console.log(form);
    this.newUser.username = form.value.username;
    this.newUser.email = form.value.email;
    this.newUser.password = form.value.password;
    this.newUser.role.splice(0, 1);
    this.newUser.role.push(form.value.role);
    console.log(this.newUser);
    await this.authSrv.signup(this.newUser).toPromise();

    this.router.navigate(['/login']);
  }
}
