import { Component, inject } from '@angular/core';
import { MenuMembershipsComponent } from '../../components/menu-memberships/menu-memberships.component';
import MembershipsComponent from '../../memberships.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

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

  private authService=inject(AuthService)

  onLogout(){
    this.authService.logout()
  }
}
