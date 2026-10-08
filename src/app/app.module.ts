import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// библиотеки
import { ToolDomModule } from 'tool-dom';
import { ToolExchangeModule } from 'tool-exchange';
import { ToolWidthPageModule } from 'tool-width-page';
import { ToolConfigToLibModule, LibConfig } from 'tool-config-to-lib';

const config: LibConfig = {
  apiUrl: 'https://api.example.com',
  log: (m: any) => console.log('[LIB]', m)
};

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
    ToolConfigToLibModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
