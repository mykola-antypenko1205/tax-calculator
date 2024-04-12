import { TestBed } from '@angular/core/testing';

import { TaxCalculatorService } from './tax-calculator.service';

describe('TaxCalculatorService', () => {
  let service: TaxCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate gross monthly salary', () => {
    expect(Math.ceil(service.calculateGrossMonthlySalary(40000))).toEqual(3334);
  });

  it('should calculate annual tax paid for value 40000', () => {
    expect(Math.ceil(service.calculateAnnualTaxPaid(40000))).toEqual(11000);
  });

  it('should calculate annual tax paid for value min salary', () => {
    expect(Math.ceil(service.calculateAnnualTaxPaid(4500))).toEqual(0);
  });

  it('should calculate annual tax paid for value 10000', () => {
    expect(Math.ceil(service.calculateAnnualTaxPaid(10000))).toEqual(1000);
  });

  it('should calculate monthly tax paid', () => {
    expect(Math.ceil(service.calculateMonthlyTaxPaid(11000))).toEqual(917);
  });

  it('should calculate net annual salary', () => {
    expect(Math.ceil(service.calculateNetAnnualSalary(40000, 11000))).toEqual(29000);
  });

  it('should calculate net monthly salary', () => {
    expect(Math.ceil(service.calculateNetMonthlySalary(29000))).toEqual(2417);
  });

  it('should return all salary report', () => {
    const mockedResult = [
      { description: 'Gross Annual Salary', value: 4500 },
      { description: 'Gross Monthly Salary', value: 375 },
      { description: 'Net Annual Salary', value: 4500 },
      { description: 'Net Monthly Salary', value: 375 },
      { description: 'Annual Tax Paid', value: 0 },
      { description: 'Monthly Tax Paid', value: 0 }
    ];

    expect(service.collectData(4500)).toEqual(mockedResult);
  });
});
