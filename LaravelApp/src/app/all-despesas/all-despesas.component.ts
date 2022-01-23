import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../models/despesas.model';
import { DespesasService } from '../services/despesas.service';

@Component({
  selector: 'app-all-despesas',
  templateUrl: './all-despesas.component.html',
  styleUrls: ['./all-despesas.component.scss']
})

export class AllDespesasComponent implements OnInit {

  adicionarDespesa: any[] = [];

  constructor(private service: DespesasService){

  }

  ngOnInit(){
    this.service.todas().subscribe((data: Data[]) =>{
      console.log(data);
      this.adicionarDespesa = data;
    });
    //this.adicionarDespesa = this.service.despesas;
  }

}
