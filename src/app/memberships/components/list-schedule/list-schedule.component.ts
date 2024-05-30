import { Component, OnInit, inject } from '@angular/core';
import { ObjModel, PaymentVoucher, ResponseSchedule } from '../../interfaces/response-schedule';
import { MembershipsService } from '../../services/memberships.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-schedule',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './list-schedule.component.html',
  styles: ``
})
export class ListScheduleComponent implements OnInit{


  public objModel:ObjModel[]=[]

  private membershipsService =inject(MembershipsService)

  ngOnInit(): void {
    this.getSchedule()
  }

  getSchedule(){
    this.membershipsService.getSchedule()
        .subscribe(
          (data)=>{
            this.objModel=data.objModel

            console.log(data)
          }
        )


  }


}
