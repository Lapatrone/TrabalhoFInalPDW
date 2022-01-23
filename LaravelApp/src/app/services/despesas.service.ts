import { Data } from './../models/despesas.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DespesasService {

private listaDespesa: any[];
private url = "http://http://localhost:8000/api/despesa";

constructor(private httpClient: HttpClient) {
  this.listaDespesa = [];
}

get despesas(){
  return this.listaDespesa;
}

todas(): Observable<Data[]>{
  return this.httpClient.get<Data[]>(this.url);
}

adicionar(despesa: any){
  this.hidratar(despesa)

  this.listaDespesa.push(despesa);
}

private hidratar(despesa: any){
  despesa.data = new Date();
}
}
