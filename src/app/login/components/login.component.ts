import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {
  MatError,
  MatFormField,
  MatLabel
} from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

import { ButtonPrimaryComponent } from '../../shared/components/button-primary/button-primary.component';
import { CustomValidators } from '../../core/validators/custom.validators';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatError,
    NgIf,
    ButtonPrimaryComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isAccessDenied: boolean = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, CustomValidators.passwordValidator]),
  });

  get email(): AbstractControl {
    return this.loginForm.get('email')!;
  }

  get password(): AbstractControl {
    return this.loginForm.get('password')!;
  }

  constructor(private loginService: LoginService, private router: Router) {
  }

  onSubmit() {
    this.loginService.authenticateUser(this.email.value, this.password.value).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.loginService.isLoggedIn = isAuthenticated;
        this.router.navigate(['/calculate']);
      } else {
        this.isAccessDenied = true;
      }
    });
  }

}
