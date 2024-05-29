import { Component } from '@angular/core';
import { MenuMembershipsComponent } from '../../components/menu-memberships/menu-memberships.component';
import MembershipsComponent from '../../memberships.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-memberships',
  standalone: true,
  imports: [
    RouterModule,
    MenuMembershipsComponent,
    MembershipsComponent
  ],
  templateUrl: './layout-memberships.component.html',
  styles: ``
})
export class LayoutMembershipsComponent {

}
