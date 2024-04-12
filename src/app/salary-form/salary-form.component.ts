import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';

import { ButtonPrimaryComponent } from '../shared/components/button-primary/button-primary.component';

@Component({
  selector: 'app-salary-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInput,
    NgIf,
    ButtonPrimaryComponent
  ],
  templateUrl: './salary-form.component.html',
  styleUrl: './salary-form.component.scss'
})
export class SalaryFormComponent {
  @Output() calculate: EventEmitter<number> = new EventEmitter<number>();
  annualSalary!: number;

  constructor() {
  }

  onClick() {
    this.calculate.emit(this.annualSalary);
  }
}
