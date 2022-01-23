import { DespesasService } from './../services/despesas.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Datum } from '../models/despesas.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-despesa',
  templateUrl: './nova-despesa.component.html',
  styleUrls: ['./nova-despesa.component.scss'],
})
export class NovaDespesaComponent {
  @Output() aoAdicionar = new EventEmitter<any>();

  nome: string = '';

  constructor(private service: DespesasService, private router: Router) {}

  adicionar_despesa() {
    console.log('Enviando despesa');

    const nomeEmitir: Datum = { nome: this.nome };
    //this.aoAdicionar.emit(nomeEmitir);

    this.service.adicionar(nomeEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limpar_campos();
        this.router.navigateByUrl('all-despesas');
      },
      (error) => console.error(error)
    );
  }

  limpar_campos() {
    this.nome = '';
  }
}
