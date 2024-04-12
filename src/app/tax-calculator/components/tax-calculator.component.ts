import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

import { ResultInfoListComponent } from '../../result-info/components/result-info-list/result-info-list.component';
import { SalaryFormComponent } from '../../salary-form/salary-form.component';
import { TaxCalculatorService } from '../services/tax-calculator.service';
import { ISalaryResult } from '../../shared/models/salary-result.interface';

@Component({
  selector: 'app-tax-calculator',
  standalone: true,
  imports: [
    NgIf,
    ResultInfoListComponent,
    SalaryFormComponent
  ],
  templateUrl: './tax-calculator.component.html',
  styleUrl: './tax-calculator.component.scss'
})
export class TaxCalculatorComponent {
  isCalculated: boolean = false;
  calculationResult!: ISalaryResult[];

  constructor(private taxCalculator: TaxCalculatorService) {
  }

  calculateData(annualSalary: number) {
    this.calculationResult = this.taxCalculator.collectData(annualSalary);
    this.isCalculated = true;
  }

}
