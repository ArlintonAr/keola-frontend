import { Component, OnInit, inject } from '@angular/core';

import { MembershipsService } from '../../services/memberships.service';
import { Observable } from 'rxjs';
import { ObjModel, ResponseMemberships } from '../../interfaces/response-memberships';
import { CommonModule } from '@angular/common';
import { ListSuscriptionsComponent } from '../../components/list-suscriptions/list-suscriptions.component';

@Component({
  selector: 'app-memberships',
  standalone: true,
  imports: [
    CommonModule,
    ListSuscriptionsComponent,
  ],
  templateUrl: './memberships.component.html',
  styles: ``
})
export default class MembershipsComponent{



}
