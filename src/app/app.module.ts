import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// библиотеки
import { ToolDomModule } from 'tool-dom';
import { ToolExchangeModule } from 'tool-exchange';
import { ToolWidthPageModule } from 'tool-width-page';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolDomModule,
    ToolExchangeModule,
    ToolWidthPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
