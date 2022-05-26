import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Provincia } from 'src/app/model/provincia';
import { environment } from 'src/environments/environment';
import { Comune } from 'src/app/model/comune';

@Injectable({
  providedIn: 'root',
})
export class ProvinceServiceService {
  URL = environment.pathApi;

  constructor(private http: HttpClient) {}

  getAll(p: number) {
    return this.http.get<any>(
      `${this.URL}/api/province?page=0&size=20&sort=id,ASC`
    );
  }

  getByID(id: number) {
    return this.http.get<Provincia>(`${this.URL}/api/province/${id}`);
  }

  getAllComuni() {
    return this.http.get<any>(
      `${this.URL}/api/comuni?page=0&size=20&sort=id,ASC`
    );
  }
}
