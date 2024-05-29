import { Component, OnInit, inject } from '@angular/core';

import { MembershipsService } from '../../services/memberships.service';
import { Observable } from 'rxjs';
import { ObjModel, ResponseMemberships } from '../../interfaces/response-memberships';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-memberships',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memberships.component.html',
  styles: ``
})
export default class MembershipsComponent implements OnInit {


  public memberships!:ResponseMemberships
  private membershipsService = inject(MembershipsService)

  ngOnInit(): void {
    console.log("Hola")
    this.getSuscriptions()
  }


  getSuscriptions() {
    this.membershipsService.getSuscriptionsForId()
    .subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => {},
    })
  }

}
