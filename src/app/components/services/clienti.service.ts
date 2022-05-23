import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientiService {
  constructor(private http: HttpClient) {}

  URL = environment.pathApi;

  getAll(pgClienti: number) {
    return this.http.get<any>(
      `${this.URL}/api/clienti?page=${pgClienti}&size=20&sort=id,ASC`
    );
  }

  getById(id: number) {
    return this.http.get<any>(`${this.URL}/api/clienti/${id}`);
  }
}
