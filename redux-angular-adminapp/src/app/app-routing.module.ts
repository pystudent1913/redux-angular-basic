import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: 'login' , component: LoginComponent },
  { path: 'register' , component: RegisterComponent },

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
