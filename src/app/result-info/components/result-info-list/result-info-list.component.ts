import { Component, Input } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

import { ResultInfoItemComponent } from '../result-info-item/result-info-item.component';
import { ISalaryResult } from '../../../shared/models/salary-result.interface';

@Component({
  selector: 'app-result-info-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ResultInfoItemComponent
  ],
  templateUrl: './result-info-list.component.html',
  styleUrl: './result-info-list.component.scss'
})
export class ResultInfoListComponent {
  @Input() resultList!: ISalaryResult[];

  constructor() {
  }

}
