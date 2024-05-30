import { Component, inject } from '@angular/core';
import { ResponseMemberships, Suscription } from '../../interfaces/response-memberships';
import { MembershipsService } from '../../services/memberships.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-suscriptions',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './list-suscriptions.component.html',
  styles: ``
})
export class ListSuscriptionsComponent {

  public memberships!: ResponseMemberships
  public suscriptionsUser: Suscription[]=[]
  private membershipsService = inject(MembershipsService)

  ngOnInit(): void {

    this.getSuscriptions()
  }


  getSuscriptions() {
    this.membershipsService.getSuscriptionsForId()
      .subscribe(
        (data)=>{
          this.suscriptionsUser=data.objModel.suscriptions
        }
      )
  }
}
