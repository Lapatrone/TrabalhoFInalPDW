import { DespesasService } from './services/despesas.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LaravelApp';


  constructor(private service: DespesasService){

  }


}
