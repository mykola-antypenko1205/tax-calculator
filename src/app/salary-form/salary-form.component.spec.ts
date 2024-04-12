import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SalaryFormComponent } from './salary-form.component';

describe('SalaryFormComponent', () => {
  let component: SalaryFormComponent;
  let fixture: ComponentFixture<SalaryFormComponent>;
  let formElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        SalaryFormComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check calling method after form submit', () => {
    formElement = fixture.debugElement.query(By.css('.salary-container__form'));
    spyOn(component.calculate, 'emit');

    formElement.nativeElement.dispatchEvent(new Event('submit'));

    expect(component.calculate.emit).toHaveBeenCalled();
  });
});
