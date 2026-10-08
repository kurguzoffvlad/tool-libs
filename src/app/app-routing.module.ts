import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Стартовые компоненты библиотек (должны экспортироваться из public-api каждой библиотеки)
import { ToolConfigToLibComponent } from 'tool-config-to-lib';
import { ToolDomComponent } from 'tool-dom';
import { ToolExchangeComponent } from 'tool-exchange';
import { ToolWidthPageComponent } from 'tool-width-page';

const routes: Routes = [
  { path: '', redirectTo: 'tool-config-to-lib', pathMatch: 'full' },

  {
    path: 'tool-config-to-lib',
    component: ToolConfigToLibComponent
  },
  {
    path: 'tool-dom',
    component: ToolDomComponent
  },
  {
    path: 'tool-exchange',
    component: ToolExchangeComponent
  },
  {
    path: 'tool-width-page',
    component: ToolWidthPageComponent
  },

  { path: '**', redirectTo: 'tool-config-to-lib' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
