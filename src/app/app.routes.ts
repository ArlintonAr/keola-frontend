import { Routes } from '@angular/router';


export const routes: Routes = [

  {
    path: 'auth',
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
    path:'memberships',
    loadComponent:()=>import('./memberships/memberships.component'),
    children:[
      {
        path:'memberships',
        title:'Suscripciones',
        loadChildren:()=>import('./memberships/pages/memberships/memberships.component')
      },
      {
        path:'packages',
        title:'Paquetes',
        loadChildren:()=>import('./memberships/pages/packages/packages.component')
      }
    ]
  },
  {
    path:'**',
    redirectTo: 'auth',
    pathMatch: 'full'

  }

];
