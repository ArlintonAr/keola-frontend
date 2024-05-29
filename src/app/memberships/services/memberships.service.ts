import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environments } from '../../environments/environments';
import { Observable, tap } from 'rxjs';
import { ObjModel, ResponseMemberships } from '../interfaces/response-memberships';

@Injectable({
  providedIn: 'root'
})
export class MembershipsService {

  private http = inject(HttpClient)
  private urlSuscription: string = environments.urlSuscription

  constructor() {}

  getSuscriptionsForId(): Observable<ResponseMemberships> {
    return this.http.get<ResponseMemberships>(`${this.urlSuscription}/12853`)
      .pipe(
        tap(response => {
          console.log(response)
        })
      )
  }

}



