import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { environments } from '../../environments/environments';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { ResponseLogin, UserDataUpdate } from '../interfaces/response-login';
import { AuthStatus } from '../interfaces/auth-status';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlAuth: string = environments.urlAuth

  public http = inject(HttpClient)

  private _currentUser = signal<UserDataUpdate | null>(null)
  private _authStatus = signal<AuthStatus>(AuthStatus.checking)

  //!Al mundo exterior
  public currentUser = computed(() => this._currentUser())
  public authStatus = computed(() => this._authStatus())

  constructor() {
  }


  setAuthentication(user: UserDataUpdate, token: string): boolean {
    this._currentUser.set(user)
    this._authStatus.set(AuthStatus.authenticated)
    localStorage.setItem('token', token)
    return true
  }


  login(username: string, password: string): Observable<boolean> {
    const url = `${this.urlAuth}`
    const body = { username, password }
    return this.http.post<ResponseLogin>(url, body)
      .pipe(
        map(({ userDataUpdate, access_Token }) => this.setAuthentication(userDataUpdate, access_Token)),
        catchError(err => throwError(() => err.error.message)
        )
      )
  }

  logout(){
    localStorage.removeItem('token')
    this._currentUser.set(null)
    this._authStatus.set(AuthStatus.notAuthenticated)
  }



}
