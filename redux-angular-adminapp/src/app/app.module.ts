import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IngresoEgresoComponent } from './ingreso-egreso/ingreso-egreso.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import '@angular/fire';

/// Cuando pasemos a prod angular pasara esto a environment.prod por nosotros
import { environment } from 'src/environments/environment';
import { appReducers } from './app.reducer';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CommonModule } from '@angular/common';

@NgModule({
   declarations: [
      AppComponent,
      DashboardComponent,
      IngresoEgresoComponent,
      LoginComponent,
      RegisterComponent,
      FooterComponent,
      NavbarComponent,
      SidebarComponent
   ],
   imports: [
      AppRoutingModule,
      BrowserModule,
      CommonModule,
      ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      AngularFireAuthModule,
      StoreModule.forRoot( appReducers ),
      StoreDevtoolsModule.instrument({
         maxAge: 25, // Retains last 25 states
         logOnly: environment.production, // Restrict extension to log-only mode
      }),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
