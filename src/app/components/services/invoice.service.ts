import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Invoice } from 'src/app/model/invoice';
import { StatoFattura } from 'src/app/model/stato-fattura';
import { NewInvoice } from 'src/app/model/new-invoice';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  constructor(private http: HttpClient) {}

  URL = environment.pathApi;

  getAll(pgFatture: number) {
    return this.http.get<any>(
      `${this.URL}/api/fatture?page=${pgFatture}&size=20&sort=id,ASC`
    );
  }

  getById(id: number) {
    return this.http.get<any>(`${this.URL}/api/fatture/${id}`);
  }

  nuovo(id: number, data: Invoice) {
    return this.http.put<any>(`${this.URL}/api/fatture/${id}`, data);
  }

  createFattura(data: NewInvoice) {
    return this.http.post<any>(`${this.URL}/api/fatture`, data);
  }

  deleteInvoice(id: number) {
    return this.http.delete(`${this.URL}/api/fatture/${id}`);
  }

  loadState(p: number) {
    return this.http
      .get<any>(`${this.URL}/api/statifattura?page=${p}&size=20&sort=id,ASC`)
      .pipe(
        map((ris: any) => {
          return ris.content as StatoFattura[];
        })
      );
  }
}
