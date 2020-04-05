import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
    declarations: [
        UsuarioComponent,
        ListaComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        UsuarioComponent,
        ListaComponent
    ],
    providers: [],
})
export class UsuariosModule {}
