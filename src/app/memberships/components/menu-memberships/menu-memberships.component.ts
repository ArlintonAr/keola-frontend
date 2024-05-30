import { Component } from '@angular/core';
import { routes } from '../../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-memberships',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './menu-memberships.component.html',
  styles: ``
})
export class MenuMembershipsComponent {

  public menuSuscription = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route.title && route.path)


  constructor() {
  }
}
