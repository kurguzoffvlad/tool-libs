import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface LibOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  libraries: LibOption[] = [
    { value: 'tool-config-to-lib', label: 'tool-config-to-lib' },
    { value: 'tool-dom',           label: 'tool-dom' },
    { value: 'tool-exchange',      label: 'tool-exchange' },
    { value: 'tool-width-page',    label: 'tool-width-page' },
  ];

  selectedLib = 'tool-config-to-lib';

  constructor(private router: Router) {}

  onLibChange(value: string): void {
    this.selectedLib = value;
    this.router.navigate([`/${value}`]).then();
  }
}
