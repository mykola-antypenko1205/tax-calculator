import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static passwordValidator({ value }: AbstractControl): ValidationErrors | null {
    if (!value?.match(/^(?=.*[0-9])(?=.*[A-Z]).{8,}$/)) {
      return {
        passwordValidator: true
      };
    }
    return null;
  }
}
