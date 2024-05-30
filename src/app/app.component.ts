import { Component, computed, effect, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces/auth-status';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'keolaApp';



  private authSerive = inject(AuthService)
  private router = inject(Router)



  public authStatusChangedEffect = effect(() => {

    switch (this.authSerive.authStatus()) {
      case AuthStatus.checking:
        return;
      case AuthStatus.authenticated:
        this.router.navigateByUrl('/suscriptions/memberships')
        return
      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl('/auth/login')
        return
    }

  })

}
