import { Routes } from '@angular/router';
import { privateGuardGuard } from './auth/guards/private-guard.guard';
import { publicGuardGuard } from './auth/guards/public-guard.guard';


export const routes: Routes = [

  {
    path: 'auth',
    canActivate:[publicGuardGuard] ,
    loadComponent: () => import('./auth/auth.component'),
    children: [
     {
        path: 'login',
        loadComponent:()=>import('./auth/pages/login/login.component')
      },
      {
        path: 'register',
        loadComponent:()=>import('./auth/pages/register/register.component')
      },
      {
        path:'',
        redirectTo:'login', pathMatch:'full'
      }
    ]
  },
  {
    path:'suscriptions',
    canActivate:[privateGuardGuard],
    loadComponent:()=>import('./memberships/memberships.component'),
    children:[
      {
        path:'memberships',
        title:'Suscripciones',
        loadComponent:()=>import('./memberships/pages/memberships/memberships.component')
      },
      {
        path:'schedule',
        title:'Cronograma',
        loadComponent:()=>import('./memberships/pages/Schedules/schedule.component')
      },
      {
        path:'pay-validate',
        title:'Validar Pagos',
        loadComponent:()=>import('./memberships/pages/pay-validate/pay-validate.component')
      },
    ]
  },
  {
    path:'**',
    redirectTo: 'auth',
    pathMatch: 'full'

  }

];
