import { Component } from '@angular/core';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-menu-memberships',
  standalone: true,
  imports: [],
  templateUrl: './menu-memberships.component.html',
  styles: ``
})
export class MenuMembershipsComponent {

  public menuSuscription=routes
    .map((route)=>route.children??[])
    .flat()
    .filter((route)=>route && route.path)

}
