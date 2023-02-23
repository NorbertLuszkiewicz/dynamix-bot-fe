import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserNameAndToken } from '../../models/interfaces';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from 'src/app/models/user-interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  errorMessage$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  successMessage$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  user$ = this.user.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  setUserNameAndToken(name: string, token: string): void {
    localStorage.setItem('name', name);
    localStorage.setItem('token', token);
    this.getNewUser();
  }

  getNewUser(): void {
    const name = localStorage.getItem('name');
    const token = localStorage.getItem('token');

    this.http.get<User>(`${environment.url}account?name=${name}&token=${token}`).subscribe(
      (user) => this.user.next(user),
      (err) => console.log('auth ', err)
    );
  }

  logout(): void {
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    this.user.next(null);
    this.router.navigate(['/information']);
  }
}
