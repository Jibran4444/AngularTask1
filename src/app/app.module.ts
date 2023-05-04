import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheatreComponent } from './theatre/theatre.component';
import { CinemaService } from './Services/cinema.service';
import { CalcTaxPipe } from './Pipes/calc-tax.pipe';
import { CalcTotalPipe } from './Pipes/calc-total.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TheatreComponent,
    CalcTaxPipe,
    CalcTotalPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CinemaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
