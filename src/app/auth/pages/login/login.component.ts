import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styles: ``
})
export default class LoginComponent {

  public errorLogin:string=''

  private authService=inject(AuthService)
  private router=inject(Router)

  private fb=inject(FormBuilder)
  public authForm:FormGroup =this.fb.group({
    username:['',[Validators.required,Validators.minLength(4)]],
    password:['',[Validators.required,Validators.minLength(5)]]
  })


  constructor(){}

  login() {

    const { username, password } = this.authForm.value

    this.authService.login(username, password)
      .subscribe({
        next: () => this.router.navigateByUrl('/suscriptions/memberships'),
        error: (message) => {
          console.error("Error", message)
          this.errorLogin = message
        },
      })

  }

}

