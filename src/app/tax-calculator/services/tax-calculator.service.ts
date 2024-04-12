import { Injectable } from '@angular/core';
import { TaxRate } from '../../shared/models/tax-rate.enum';
import { SalaryRange } from '../../shared/models/salary-range.enum';
import { ISalaryResult } from '../../shared/models/salary-result.interface';

@Injectable({
  providedIn: 'root'
})
export class TaxCalculatorService {
  constructor() { }

  calculateGrossMonthlySalary(annualSalary: number): number {
    return annualSalary / 12;
  }

  calculateNetAnnualSalary(annualSalary: number, annualTaxPaid: number): number {
    return annualSalary - annualTaxPaid;
  }

  calculateNetMonthlySalary(netAnnualSalary: number): number {
    return netAnnualSalary / 12;
  }

  calculateAnnualTaxPaid(annualSalary: number): number {
    let annualTaxPaid: number = 0;
    if (annualSalary <= SalaryRange.MinSalary) {
      annualTaxPaid = annualSalary * TaxRate.WithoutTax;
    } else if (annualSalary <= SalaryRange.BaseSalary) {
      annualTaxPaid = (annualSalary - SalaryRange.MinSalary) * TaxRate.Low;
    } else if (annualSalary > SalaryRange.BaseSalary) {
      annualTaxPaid = (SalaryRange.BaseSalary - SalaryRange.MinSalary) * TaxRate.Low + (annualSalary - SalaryRange.BaseSalary) * TaxRate.High;
    }

    return annualTaxPaid;
  }

  calculateMonthlyTaxPaid(annualTaxPaid: number): number {
    return annualTaxPaid / 12;
  }

  collectData(annualSalary: number): ISalaryResult[] {
    const annualTaxPaid = this.calculateAnnualTaxPaid(annualSalary);
    const netAnnualSalary = this.calculateNetAnnualSalary(annualSalary, annualTaxPaid);
    const grossMonthlySalary = this.calculateGrossMonthlySalary(annualSalary);
    const netMonthlySalary = this.calculateNetMonthlySalary(netAnnualSalary);
    const monthlyTaxPaid = this.calculateMonthlyTaxPaid(annualTaxPaid);

    return [
      { description: 'Gross Annual Salary', value: annualSalary },
      { description: 'Gross Monthly Salary', value: grossMonthlySalary },
      { description: 'Net Annual Salary', value: netAnnualSalary },
      { description: 'Net Monthly Salary', value: netMonthlySalary },
      { description: 'Annual Tax Paid', value: annualTaxPaid },
      { description: 'Monthly Tax Paid', value: monthlyTaxPaid }
    ];
  }

}
