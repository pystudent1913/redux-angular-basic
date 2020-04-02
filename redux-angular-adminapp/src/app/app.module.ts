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

/// Cuando pasemos a prod angular pasara esto a environment.prod por nosotros
import { environment } from 'src/environments/environment';

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
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      AngularFireAuthModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
