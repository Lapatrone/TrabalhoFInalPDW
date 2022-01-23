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

todas(){
  return this.httpClient.get(this.url);
}
adicionar(despesa: any){
  this.hidratar(despesa)

  this.listaDespesa.push(despesa);
}

private hidratar(despesa: any){
  despesa.data = new Date();
}
}
