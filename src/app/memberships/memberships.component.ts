import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutMembershipsComponent } from './layouts/layout-memberships/layout-memberships.component';

@Component({
  selector: 'app-memberships',
  standalone: true,
  imports: [
    RouterModule,
    LayoutMembershipsComponent
  ],
  templateUrl: './memberships.component.html',
  styles: ``
})
export default class MembershipsComponent {

}
