import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [{ path: 'listar', component: ListarComponent },
{ path: 'registrar', component: RegistrarComponent },
{path:'**', component:ListarComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
