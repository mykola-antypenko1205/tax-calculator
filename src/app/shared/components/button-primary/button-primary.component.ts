import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-button-primary',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonPrimaryComponent {
  @Input() label!: string;
  @Input() disabled!: boolean;
}
