// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Componentes propios
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { DetalleComponent } from './detalle/detalle.component';
import { IngresoEgresoComponent } from './ingreso-egreso.component';
import { OrdenIngresoPipe } from '../pipes/orden-ingreso.pipe';
import { ChartsModule } from 'ng2-charts';


import { SharedModule } from '../shared/shared.module';
import { DashboardRoutesModule } from '../dashboard/dashboard-router.module';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
    declarations: [
        DetalleComponent,
        EstadisticaComponent,
        DashboardComponent,
        IngresoEgresoComponent,
        OrdenIngresoPipe
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule, // Esto se da porque usamos los componentes del sharedmodule
        DashboardRoutesModule,
        ChartsModule
    ],
    exports: [],
    providers: [],
})
export class IngresoEgresoModule {}
