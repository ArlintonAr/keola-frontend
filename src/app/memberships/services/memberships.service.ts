import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environments } from '../../environments/environments';
import { Observable, catchError, map, throwError } from 'rxjs';
import {  ResponseMemberships } from '../interfaces/response-memberships';
import { ResponseSchedule } from '../interfaces/response-schedule';
import { ResponseValidate } from '../interfaces/response-validate';

@Injectable({
  providedIn: 'root'
})
export class MembershipsService {

  private http = inject(HttpClient)

  private urlSuscription: string = environments.urlSuscription
  private urlSchedule:string=environments.urlSchedule
  private urlPayments:string=environments.urlPayments

  constructor() {}

  getSuscriptionsForId(): Observable<ResponseMemberships> {
    return this.http.get<ResponseMemberships>(`${this.urlSuscription}/12853`)
    .pipe(
      /* map(), */
      catchError(err => throwError(() => err.error.message)
      )
    )

  }
  getSchedule():Observable<ResponseSchedule>{
    //                /{idSuscription}/{flaguser}
    return this.http.get<ResponseSchedule>(`${this.urlSchedule}/16143/1`)

  }

  validatePayments(
    idSubscription:string,
    ListIdPaymentsValidate:number[],
    IsAcceptedPayment:number,
    reasonRejection:object
    ):Observable<ResponseValidate>{

    const body={idSubscription,ListIdPaymentsValidate,IsAcceptedPayment,reasonRejection}
    const url=`${this.urlPayments}`
    return this.http.post<ResponseValidate>(url,body)
    .pipe(
      catchError(err => throwError(() => err.error.message)
      )
    )

  }
}



