import { Offers } from './../model/Offers';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OffersService {
  url: string = "http://localhost:3000/Offers";
  private listaCambio = new Subject<Offers[]>()

  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Offers[]>(this.url);
  }
  //
  insertar(offer: Offers) {
    return this.http.post(this.url, offer);
  }
  setLista(listaNueva: Offers[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
