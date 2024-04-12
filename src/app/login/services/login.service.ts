import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: boolean = false;
  private url = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.url);
  }

  authenticateUser(email: string, password: string): Observable<boolean> {
    return this.getUsers().pipe(
      map( users => {
        return users.some(user => user.email === email && user.password === password);
      })
    );
  }

}
