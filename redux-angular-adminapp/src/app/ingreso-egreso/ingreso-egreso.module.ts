import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { DetalleComponent } from './detalle/detalle.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { IngresoEgresoComponent } from './ingreso-egreso.component';
import { OrdenIngresoPipe } from '../pipes/orden-ingreso.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        DetalleComponent,
        EstadisticaComponent,
        DashboardComponent,
        IngresoEgresoComponent,
        OrdenIngresoPipe,
        ChartsModule
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule // Esto se da porque usamos los componentes del sharedmodule
    ],
    exports: [],
    providers: [],
})
export class IngresoEgresoModule {}