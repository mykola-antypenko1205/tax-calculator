import { Routes } from '@angular/router';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { TaxCalculatorComponent } from './tax-calculator/components/tax-calculator.component';
import { LoginComponent } from './login/components/login.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'calculate',
    pathMatch: 'full'
  },
  {
    path: 'calculate',
    canActivate: [AuthGuard],
    component: TaxCalculatorComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];
