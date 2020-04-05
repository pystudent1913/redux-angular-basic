import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: 'login' , component: LoginComponent },
  { path: 'register' , component: RegisterComponent },
  {
    path: '',
    canLoad: [ AuthGuard ],
    loadChildren: () => import('./ingreso-egreso/ingreso-egreso.module')
                          .then(m => m.IngresoEgresoModule)
  },
  { path: '**' , redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
