import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-despesa',
  templateUrl: './nova-despesa.component.html',
  styleUrls: ['./nova-despesa.component.scss'],
})
export class NovaDespesaComponent {

  @Output() aoAdicionar = new EventEmitter<any>();

  nome: string = "";

  adicionar_despesa() {
    console.log('Enviando despesa');

    const nomeEmitir = { nome: this.nome };
    this.aoAdicionar.emit(nomeEmitir);

    this.limpar_campos();
  }

  limpar_campos() {

    this.nome = "";

  }
}
