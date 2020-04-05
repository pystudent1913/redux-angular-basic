import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IngresoEgresoComponent } from './ingreso-egreso/ingreso-egreso.component';
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
import { DetalleComponent } from './ingreso-egreso/detalle/detalle.component';
import { OrdenIngresoPipe } from './pipes/orden-ingreso.pipe';
import { EstadisticaComponent } from './ingreso-egreso/estadistica/estadistica.component';

import { ChartsModule } from 'ng2-charts';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
   declarations: [
      AppComponent,
      DashboardComponent,
      IngresoEgresoComponent,
      DetalleComponent,
      OrdenIngresoPipe,
      EstadisticaComponent
   ],
   imports: [
      // Mis modulos propios
      AuthModule,
      SharedModule,
      // Demas
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
      ChartsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
