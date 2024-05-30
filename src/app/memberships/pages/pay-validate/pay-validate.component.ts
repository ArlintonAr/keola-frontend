import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MembershipsService } from '../../services/memberships.service';

@Component({
  selector: 'app-pay-validate',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './pay-validate.component.html',
  styles: ``
})
export default class PayValidateComponent {

  public errors:string=''

  private membershipsService=inject(MembershipsService)

  private fb =inject(FormBuilder)
  public formValidatePay:FormGroup =this.fb.group({
    IdSuscription:['',[Validators.required]],
    idPay:['',[Validators.required]],
    IsAcceptedPayment:['',[Validators.required]],
    id:['',[Validators.required]],
    detalle:['',[Validators.required]]
  })

  validatePays(){
    const  {IdSuscription,idPay,IsAcceptedPayment,id,detalle}=this.formValidatePay.value
    const ListIdPaymentsValidate:number[]=[idPay]
    const ReasonRejection ={id,detalle}
    this.membershipsService.validatePayments(IdSuscription,ListIdPaymentsValidate,IsAcceptedPayment,ReasonRejection)
    .subscribe(
      {
      error: (message) => {
        console.error("Error", message)
        },
      }
    )

  }

}
