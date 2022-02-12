import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PieComponent } from './pie/pie.component';
import { BarComponent } from './bar/bar.component';
import { ScatterComponent } from './scatter/scatter.component';

@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    BarComponent,
    ScatterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
