import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DespesasService {

private listaDespesa: any[];

constructor() {
  this.listaDespesa = [];
}

get despesas(){
  return this.listaDespesa;
}

adicionar(despesa: any){
  this.hidratar(despesa)

  this.listaDespesa.push(despesa);
}

private hidratar(despesa: any){
  despesa.data = new Date();
}
}
