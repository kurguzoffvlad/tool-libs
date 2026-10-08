import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// библиотеки
import { ToolDomModule } from 'tool-dom';
import { ToolExchangeModule } from 'tool-exchange';
import { ToolWidthPageModule } from 'tool-width-page';
import { ToolConfigToLibModule } from 'tool-config-to-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ToolDomModule,
    ToolExchangeModule,
    ToolWidthPageModule,
    ToolConfigToLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
