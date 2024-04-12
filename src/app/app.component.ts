import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TaxCalculatorComponent } from './tax-calculator/components/tax-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TaxCalculatorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
