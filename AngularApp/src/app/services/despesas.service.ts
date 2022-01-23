import { Datum } from './../models/despesas.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DespesasService {

private listaDespesa: any[];
private url = "http://localhost:8000/api/despesa";

constructor(private httpClient: HttpClient) {
  this.listaDespesa = [];
}

get despesas(){
  return this.listaDespesa;
}

todas(): Observable<Datum[]>{
  return this.httpClient.get<Datum[]>(this.url);
}

adicionar(despesa: Datum){
  this.hidratar(despesa)

  this.listaDespesa.push(despesa);
  return this.httpClient.post<Datum>(this.url, despesa);
}

private hidratar(despesa: any){
  despesa.data = new Date();
}
}
