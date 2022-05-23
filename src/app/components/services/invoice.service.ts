import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
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
}
