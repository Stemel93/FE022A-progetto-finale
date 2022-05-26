import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/model/customer';
import { NewCustomer } from 'src/app/model/new-customer';

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

  createCustomer(data: NewCustomer) {
    return this.http.post(`${this.URL}/api/clienti/`, data);
  }
  updateCustomer(data: any, id: number) {
    return this.http.put(`${this.URL}/api/clienti/${id}`, data);
  }
  deleteCustomer(id: number) {
    return this.http.delete(`${this.URL}/api/clienti/${id}`);
  }

  getAllNoPage() {
    return this.http.get<any>(
      `${this.URL}/api/clienti?page=0&size=500&sort=id,ASC`
    );
  }

  getById(id: number) {
    return this.http.get<any>(`${this.URL}/api/clienti/${id}`);
  }

  getAllUsers() {
    return this.http.get<any>(`${this.URL}/api/users`);
  }
}
