import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ResultInfoItemComponent } from './result-info-item.component';
import { ISalaryResult } from '../../../shared/models/salary-result.interface';

describe('ResultInfoItemComponent', () => {
  let component: ResultInfoItemComponent;
  let fixture: ComponentFixture<ResultInfoItemComponent>;
  let resultItemElement: DebugElement;
  const mockedResultItem: ISalaryResult = {
    description: 'Gross Annual Salary',
    value: 40000
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultInfoItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultInfoItemComponent);
    component = fixture.componentInstance;
  });

  it('should display results item', () => {
    resultItemElement = fixture.debugElement.query(By.css('.result-info__text'));
    const mockedResultText = 'Gross Annual Salary : £40,000.00';
    component.resultItem = mockedResultItem;

    fixture.detectChanges();
    expect(resultItemElement.nativeElement.textContent).toContain(mockedResultText);
  });
});
