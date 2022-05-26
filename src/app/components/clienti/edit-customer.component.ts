import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Customer } from 'src/app/model/customer';
import { ClientiService } from '../services/clienti.service';
import { NewCustomer } from 'src/app/model/new-customer';
import { ProvinceServiceService } from '../services/province-service.service';
import { Comune } from 'src/app/model/comune';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-customer',
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
              >{{ form.value.nomeContatto }}
              {{ form.value.cognomeContatto }}</span
            ><span class="text-black-50">{{ form.value.email }}</span
            ><span> </span>
          </div>
        </div>
        <div class="col-md-5 border-right">
          <form [formGroup]="form" (ngSubmit)="prova(form)">
            <div class="p-3 py-5">
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <h4 class="text-right">Crea Utente</h4>
              </div>

              <!-- wrapper -->
              <div class="row mt-2">
                <div class="col-md-6 position-relative">
                  <label class="labels fw-bold">Nome*</label
                  ><input
                    formControlName="nomeContatto"
                    type="text"
                    id="nomeContatto"
                    autocomplete="false"
                    class="form-control"
                    pattern="^[A-Za-zÁČĎÉĚÍŇÓŘŠŤÚŮÝŽáčďéěíňóřšťúůýžÅÆÉØåæéøÉËÏÓÖÜéëïóöüÄÅÖäåöÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸàâæçéèêëïîôœùûüÿÄÖÜẞäöüßÁÉÍÖÓŐÜÚŰáéíöóőüúűÁÆÐÉÍÓÖÞÚÝáæðéíóöþúýÀÈÉÌÒÓÙàèéìòóùÅÆÂÉÈÊØÓÒÔåæâéèêøóòôĄĆĘŁŃÓŚŹŻąćęłńóśźżÃÁÀÂÇÉÊÍÕÓÔÚÜãáàâçéêíõóôúüĂÂÎŞȘŢȚăâîşșţțÁÉÍÑÓÚÜáéíñóúüÄÅÉÖäåéöÂÇĞIİÎÖŞÜÛâçğıİîöşüû]+(?: [A-Za-zÁČĎÉĚÍŇÓŘŠŤÚŮÝŽáčďéěíňóřšťúůýžÅÆÉØåæéøÉËÏÓÖÜéëïóöüÄÅÖäåöÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸàâæçéèêëïîôœùûüÿÄÖÜẞäöüßÁÉÍÖÓŐÜÚŰáéíöóőüúűÁÆÐÉÍÓÖÞÚÝáæðéíóöþúýÀÈÉÌÒÓÙàèéìòóùÅÆÂÉÈÊØÓÒÔåæâéèêøóòôĄĆĘŁŃÓŚŹŻąćęłńóśźżÃÁÀÂÇÉÊÍÕÓÔÚÜãáàâçéêíõóôúüĂÂÎŞȘŢȚăâîşșţțÁÉÍÑÓÚÜáéíñóúüÄÅÉÖäåéöÂÇĞIİÎÖŞÜÛâçğıİîöşüû]+)*$"
                    [className]="
                      form.controls.nomeContatto.invalid &&
                      form.controls.nomeContatto.dirty
                        ? 'form-control is-invalid'
                        : !form.controls.nomeContatto.invalid &&
                          form.controls.nomeContatto.dirty
                        ? 'form-control is-valid'
                        : 'form-control'
                    "
                  />
                  <div class="invalid-tooltip">
                    Per favore, inserisci un nome valido
                  </div>
                </div>
                <div class="col-md-6 position-relative">
                  <label class="labels fw-bold">Cognome*</label
                  ><input
                    formControlName="cognomeContatto"
                    type="text"
                    id="cognomeContatto"
                    autocomplete="false"
                    class="form-control"
                    value=""
                    placeholder="Cognome"
                    pattern="^[A-Za-zÁČĎÉĚÍŇÓŘŠŤÚŮÝŽáčďéěíňóřšťúůýžÅÆÉØåæéøÉËÏÓÖÜéëïóöüÄÅÖäåöÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸàâæçéèêëïîôœùûüÿÄÖÜẞäöüßÁÉÍÖÓŐÜÚŰáéíöóőüúűÁÆÐÉÍÓÖÞÚÝáæðéíóöþúýÀÈÉÌÒÓÙàèéìòóùÅÆÂÉÈÊØÓÒÔåæâéèêøóòôĄĆĘŁŃÓŚŹŻąćęłńóśźżÃÁÀÂÇÉÊÍÕÓÔÚÜãáàâçéêíõóôúüĂÂÎŞȘŢȚăâîşșţțÁÉÍÑÓÚÜáéíñóúüÄÅÉÖäåéöÂÇĞIİÎÖŞÜÛâçğıİîöşüû]+(?: [A-Za-zÁČĎÉĚÍŇÓŘŠŤÚŮÝŽáčďéěíňóřšťúůýžÅÆÉØåæéøÉËÏÓÖÜéëïóöüÄÅÖäåöÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸàâæçéèêëïîôœùûüÿÄÖÜẞäöüßÁÉÍÖÓŐÜÚŰáéíöóőüúűÁÆÐÉÍÓÖÞÚÝáæðéíóöþúýÀÈÉÌÒÓÙàèéìòóùÅÆÂÉÈÊØÓÒÔåæâéèêøóòôĄĆĘŁŃÓŚŹŻąćęłńóśźżÃÁÀÂÇÉÊÍÕÓÔÚÜãáàâçéêíõóôúüĂÂÎŞȘŢȚăâîşșţțÁÉÍÑÓÚÜáéíñóúüÄÅÉÖäåéöÂÇĞIİÎÖŞÜÛâçğıİîöşüû]+)*$"
                    [className]="
                      form.controls.cognomeContatto.invalid &&
                      form.controls.cognomeContatto.dirty
                        ? 'form-control is-invalid'
                        : !form.controls.cognomeContatto.invalid &&
                          form.controls.cognomeContatto.dirty
                        ? 'form-control is-valid'
                        : 'form-control'
                    "
                  />
                  <div class="invalid-tooltip">
                    Per favore, inserisci un cognome valido
                  </div>
                </div>
                <div class="col-md-6 position-relative">
                  <label class="labels fw-bold">Email*</label
                  ><input
                    formControlName="email"
                    type="email"
                    id="pec"
                    autocomplete="false"
                    class="form-control"
                    placeholder="Email"
                    value=""
                    pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
                    [className]="
                      form.controls.email.invalid && form.controls.email.dirty
                        ? 'form-control is-invalid'
                        : !form.controls.email.invalid &&
                          form.controls.email.dirty
                        ? 'form-control is-valid'
                        : 'form-control'
                    "
                  />
                  <div class="invalid-tooltip">
                    Per favore, inserisci una email valida
                  </div>
                </div>
                <div class="col-md-6 position-relative">
                  <label class="labels fw-bold">Telefono*</label
                  ><input
                    formControlName="telefono"
                    type="tel"
                    id="telefono"
                    autocomplete="false"
                    class="form-control"
                    value=""
                    placeholder="Telefono"
                    pattern="^((\\+91-?)|0)?[0-9]{10}"
                    [className]="
                      form.controls.telefono.invalid &&
                      form.controls.telefono.dirty
                        ? 'form-control is-invalid'
                        : !form.controls.telefono.invalid &&
                          form.controls.telefono.dirty
                        ? 'form-control is-valid'
                        : 'form-control'
                    "
                  />
                  <div class="invalid-tooltip">
                    Per favore, inserisci un numero di cellulare valido
                  </div>
                </div>
                <div class="col-md-6 position-relative">
                  <label class="labels fw-bold">Ragione Sociale*</label
                  ><input
                    formControlName="ragioneSociale"
                    type="text"
                    id="ragioneSociale"
                    autocomplete="false"
                    class="form-control"
                    value=""
                    minlength="3"
                    [className]="
                      form.controls.ragioneSociale.invalid &&
                      form.controls.ragioneSociale.dirty
                        ? 'form-control is-invalid'
                        : !form.controls.ragioneSociale.invalid &&
                          form.controls.ragioneSociale.dirty
                        ? 'form-control is-valid'
                        : 'form-control'
                    "
                  />
                  <div class="invalid-tooltip">
                    Per favore, inserisci una ragione sociale valida
                  </div>
                </div>
                <div class="col-md-6">
                  <label class="labels fw-bold">Tipo Azienda*</label
                  ><select
                    formControlName="tipoCliente"
                    type="text"
                    id="tipoCliente"
                    autocomplete="false"
                    class="form-control"
                    placeholder="Tipo Azienda"
                    value=""
                    [className]="
                      form.controls.tipoCliente.invalid &&
                      form.controls.tipoCliente.dirty
                        ? 'form-control is-invalid'
                        : !form.controls.tipoCliente.invalid &&
                          form.controls.tipoCliente.dirty
                        ? 'form-control is-valid'
                        : 'form-control'
                    "
                  >
                    <option value="">Seleziona Tipo Azienda</option>
                    <option value="SRL">SRL</option>
                    <option value="SPA">SPA</option>
                    <option value="SAS">SAS</option>
                    <option value="PA">PA</option>
                  </select>
                </div>
                <div class="col-md-6 position-relative">
                  <label class="labels fw-bold">P.IVA*</label
                  ><input
                    formControlName="partitaIva"
                    type="text"
                    id="partitaIva"
                    autocomplete="false"
                    class="form-control"
                    placeholder="P.IVA"
                    value=""
                    pattern="^[0-9]+$"
                    maxlength="11"
                    minlength="11"
                    [className]="
                      form.controls.partitaIva.invalid &&
                      form.controls.partitaIva.dirty
                        ? 'form-control is-invalid'
                        : !form.controls.partitaIva.invalid &&
                          form.controls.partitaIva.dirty
                        ? 'form-control is-valid'
                        : 'form-control'
                    "
                  />
                  <div class="invalid-tooltip">
                    La P.IVA necessita di un min. di 11 caratteri
                  </div>
                </div>
                <div class="col-md-6 position-relative">
                  <label class="labels fw-bold">Telefono Azienda</label
                  ><input
                    formControlName="telefonoContatto"
                    type="tel"
                    id="telefonoContatto"
                    autocomplete="false"
                    class="form-control"
                    value=""
                    placeholder="Tel. Azienda"
                    pattern="^[0-9]+$"
                    minlength="6"
                    [className]="
                      form.controls.telefonoContatto.invalid &&
                      form.controls.telefonoContatto.dirty
                        ? 'form-control is-invalid'
                        : !form.controls.telefonoContatto.invalid &&
                          form.controls.telefonoContatto.dirty
                        ? 'form-control is-valid'
                        : 'form-control'
                    "
                  />

                  <div class="invalid-tooltip">Può contenere solo numeri</div>
                </div>
                <div class="col-md-6">
                  <label class="labels fw-bold">Email Azienda*</label
                  ><input
                    formControlName="emailContatto"
                    type="email"
                    id="emailContatto"
                    autocomplete="false"
                    class="form-control"
                    placeholder="Email azienda"
                    value=""
                    pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
                    [className]="
                      form.controls.emailContatto.invalid &&
                      form.controls.emailContatto.dirty
                        ? 'form-control is-invalid'
                        : !form.controls.emailContatto.invalid &&
                          form.controls.emailContatto.dirty
                        ? 'form-control is-valid'
                        : 'form-control'
                    "
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels fw-bold">Pec</label
                  ><input
                    formControlName="pec"
                    type="email"
                    id="pec"
                    autocomplete="false"
                    class="form-control"
                    value=""
                    placeholder="Pec"
                    pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
                    [className]="
                      form.controls.pec.invalid && form.controls.pec.dirty
                        ? 'form-control is-invalid'
                        : !form.controls.pec.invalid && form.controls.pec.dirty
                        ? 'form-control is-valid'
                        : 'form-control'
                    "
                  />
                </div>
                <div class="text-dark">
                  <hr />
                </div>
                <h4 class="text-right mb-3">Sede Legale</h4>
                <div class="row mt-3" formGroupName="indirizzoSedeLegale">
                  <div class="col-md-6">
                    <label class="labels fw-bold">Via</label
                    ><input
                      formControlName="via"
                      type="text"
                      id="viaLegale"
                      autocomplete="false"
                      class="form-control"
                      placeholder="Via/Piazza"
                      value=""
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels fw-bold">Civico</label
                    ><input
                      formControlName="civico"
                      type="text"
                      id="civicoLegale"
                      autocomplete="false"
                      class="form-control"
                      value=""
                      placeholder="Civico"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels fw-bold">Cap</label
                    ><input
                      formControlName="cap"
                      type="text"
                      id="capLegale"
                      autocomplete="false"
                      class="form-control"
                      placeholder="Cap"
                      value=""
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels fw-bold">Località</label
                    ><input
                      formControlName="localita"
                      type="text"
                      id="localitaLegale"
                      autocomplete="false"
                      class="form-control"
                      placeholder="Località"
                      value=""
                    />
                  </div>
                  <div class="text-dark">
                    <hr />
                  </div>

                  <div class="row mt-1" formGroupName="comune">
                    <div class="col-md-6">
                      <label class="labels fw-bold comuni">Comune*</label
                      ><select
                        formControlName="id"
                        type="text"
                        id="idLegale"
                        autocomplete="false"
                        class="form-control comune"
                        placeholder="Comune"
                        value=""
                      >
                        <option value="">Seleziona Comune</option>
                        <option *ngFor="let citta of city" [value]="citta.id">
                          {{ citta.nome }} ({{ citta.provincia.sigla }})
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="text-dark mt-3">
                  <hr />
                </div>

                <h4 class="text-right mb-3">Sede Operativa</h4>
                <div class="row mt-3" formGroupName="indirizzoSedeOperativa">
                  <div class="col-md-6">
                    <label class="labels fw-bold">Via</label
                    ><input
                      formControlName="via"
                      type="text"
                      id="via"
                      autocomplete="false"
                      class="form-control"
                      placeholder="Via/Piazza"
                      value=""
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels fw-bold">Civico</label
                    ><input
                      formControlName="civico"
                      type="text"
                      id="civico"
                      autocomplete="false"
                      class="form-control"
                      value=""
                      placeholder="Civico"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels fw-bold">Cap</label
                    ><input
                      formControlName="cap"
                      type="text"
                      id="cap"
                      autocomplete="false"
                      class="form-control"
                      placeholder="Cap"
                      value=""
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels fw-bold">Località</label
                    ><input
                      formControlName="localita"
                      type="text"
                      id="localita"
                      autocomplete="false"
                      class="form-control"
                      placeholder="Località"
                      value=""
                    />
                  </div>
                  <div class="text-dark">
                    <hr />
                  </div>

                  <div class="row mt-3" formGroupName="comune">
                    <div class="col-md-6">
                      <label class="labels fw-bold">Comune*</label
                      ><select
                        formControlName="id"
                        type="text"
                        id="id"
                        autocomplete="false"
                        class="form-control comune"
                        placeholder="Comune"
                        value=""
                      >
                        <option value="">Seleziona Comune</option>
                        <option *ngFor="let citta of city" [value]="citta.id">
                          {{ citta.nome }} ({{ citta.provincia.sigla }})
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-5 text-center">
                <button
                  class="btn btn-primary profile-button"
                  type="submit"
                  [ngClass]="{ disabled: form.invalid === true }"
                >
                  Aggiungi Utente
                </button>
                <button class="btn btn-danger" (click)="back()">
                  Indietro
                </button>
              </div>
            </div>
          </form>

          <!-- wrapper end -->
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .comune {
        width: 200% !important;
      }
    `,
  ],
})
export class EditCustomerComponent implements OnInit {
  form!: FormGroup;
  customer!: Customer;
  currentDate!: any;
  legione!: NewCustomer;
  city!: Comune[];
  citySelected!: number;
  cityLegale!: number;
  items!: any;
  customerId!: number;
  customerSelected!: Customer;

  constructor(
    private fb: FormBuilder,
    private customerServ: ClientiService,
    private comuniServ: ProvinceServiceService,

    private snapRoute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  prova(formgroup: any) {
    console.log(formgroup);
    this.form.value.ragioneSociale;
    this.customer = {
      id: 0,
      ragioneSociale: '',
      partitaIva: '',
      tipoCliente: '',
      email: '',
      pec: '',
      telefono: '',
      nomeContatto: '',
      cognomeContatto: '',
      telefonoContatto: '',
      emailContatto: '',
      indirizzoSedeOperativa: {
        via: '',
        civico: '',
        cap: '',
        localita: '',
        comune: { id: 1, nome: '', provincia: { id: 1, nome: '', sigla: '' } },
      },
      indirizzoSedeLegale: {
        via: '',
        civico: '',
        cap: '',
        localita: '',
        comune: { id: 1, nome: '', provincia: { id: 1, nome: '', sigla: '' } },
      },
      dataInserimento: '',
      dataUltimoContatto: '',
    };

    this.customer = formgroup.value;

    this.currentDate = new Date();

    /* prova  */

    this.customer.dataInserimento = this.currentDate.toISOString();
    this.customer.dataUltimoContatto = this.currentDate.toISOString();

    this.citySelected = formgroup.value.indirizzoSedeOperativa.comune.id;
    this.cityLegale = formgroup.value.indirizzoSedeLegale.comune.id;
    console.log(this.citySelected);
    console.log(this.city[this.citySelected - 1]);
    this.customer.id = this.customerId;

    this.customer.indirizzoSedeOperativa.comune =
      this.city[this.citySelected - 1];
    this.customer.indirizzoSedeLegale.comune = this.city[this.cityLegale - 1];

    console.log(this.customer);

    this.customerServ
      .updateCustomer(this.customer, this.customerId)
      .subscribe();
  }

  ngOnInit(): void {
    this.getAllComuni();
    this.loadUser();

    this.form = this.fb.group({
      ragioneSociale: new FormControl('', Validators.required),
      partitaIva: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      tipoCliente: new FormControl('', Validators.required),
      pec: new FormControl(''),
      telefono: new FormControl('', Validators.required),
      nomeContatto: new FormControl('', Validators.required),
      cognomeContatto: new FormControl('', Validators.required),
      telefonoContatto: new FormControl(''),
      emailContatto: new FormControl('', Validators.required),

      indirizzoSedeLegale: this.fb.group({
        via: new FormControl(''),
        civico: new FormControl(''),
        cap: new FormControl(''),
        localita: new FormControl(''),
        comune: this.fb.group({
          id: new FormControl('', Validators.required),
        }),
      }),

      indirizzoSedeOperativa: this.fb.group({
        via: new FormControl(''),
        civico: new FormControl(''),
        cap: new FormControl(''),
        localita: new FormControl(''),
        comune: this.fb.group({
          id: new FormControl('', Validators.required),
        }),
      }),
    });
  }

  loadUser() {
    this.customerId = this.snapRoute.snapshot.params['id'];
    this.customerServ.getById(this.customerId).subscribe((response) => {
      this.customerSelected = response;
      console.log(this.customerSelected);
      console.log(this.customerSelected.ragioneSociale);
      this.form.controls['ragioneSociale'].patchValue(
        this.customerSelected.ragioneSociale
      );
      this.form.controls['partitaIva'].patchValue(
        this.customerSelected.partitaIva
      );
      this.form.controls['email'].patchValue(this.customerSelected.email);
      this.form.controls['tipoCliente'].patchValue(
        this.customerSelected.tipoCliente
      );
      this.form.controls['pec'].patchValue(this.customerSelected.pec);
      this.form.controls['telefono'].patchValue(this.customerSelected.telefono);
      this.form.controls['nomeContatto'].patchValue(
        this.customerSelected.nomeContatto
      );
      this.form.controls['cognomeContatto'].patchValue(
        this.customerSelected.cognomeContatto
      );
      this.form.controls['emailContatto'].patchValue(
        this.customerSelected.emailContatto
      );
      this.form.controls['telefonoContatto'].patchValue(
        this.customerSelected.telefonoContatto
      );
      const groupOp: FormGroup = this.form.get(
        'indirizzoSedeOperativa'
      ) as FormGroup;
      groupOp.controls['via'].patchValue(
        this.customerSelected.indirizzoSedeOperativa.via
      );
      groupOp.controls['civico'].patchValue(
        this.customerSelected.indirizzoSedeOperativa.civico
      );
      groupOp.controls['cap'].patchValue(
        this.customerSelected.indirizzoSedeOperativa.cap
      );
      groupOp.controls['localita'].patchValue(
        this.customerSelected.indirizzoSedeOperativa.localita
      );
      const groupComune: FormGroup = groupOp.get('comune') as FormGroup;
      groupComune.controls['id'].patchValue(
        this.customerSelected.indirizzoSedeOperativa.comune.id
      );
      const groupLeg: FormGroup = this.form.get(
        'indirizzoSedeLegale'
      ) as FormGroup;
      groupLeg.controls['via'].patchValue(
        this.customerSelected.indirizzoSedeLegale.via
      );
      groupLeg.controls['civico'].patchValue(
        this.customerSelected.indirizzoSedeLegale.civico
      );
      groupLeg.controls['cap'].patchValue(
        this.customerSelected.indirizzoSedeLegale.cap
      );
      groupLeg.controls['localita'].patchValue(
        this.customerSelected.indirizzoSedeLegale.localita
      );
      const groupComuneLeg: FormGroup = groupLeg.get('comune') as FormGroup;
      groupComuneLeg.controls['id'].patchValue(
        this.customerSelected.indirizzoSedeLegale.comune.id
      );
    });
    this.back();
  }

  getAllComuni() {
    this.comuniServ.getAllComuni().subscribe((data) => {
      this.items = data;
      this.city = this.items.content;
      console.log(this.items);
      console.log(this.city);
    });
  }

  back() {
    this.router.navigate(['/clienti']);
  }
}
