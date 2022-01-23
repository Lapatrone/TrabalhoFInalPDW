import { AppRoutingModule } from './app-routing.module';
import { NovaDespesaComponent } from './nova-despesa/nova-despesa.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AllDespesasComponent } from './all-despesas/all-despesas.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    NovaDespesaComponent,
    AllDespesasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},{
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'EUR',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
