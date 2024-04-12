import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { ISalaryResult } from '../../../shared/models/salary-result.interface';

@Component({
  selector: 'app-result-info-item',
  standalone: true,
    imports: [
        CurrencyPipe
    ],
  templateUrl: './result-info-item.component.html',
  styleUrl: './result-info-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultInfoItemComponent {
  @Input() resultItem!: ISalaryResult;

  constructor() {}

}
