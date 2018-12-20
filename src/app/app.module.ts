import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListarComponent } from './listar/listar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { VehiculoService } from './vehiculo.service';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [{ path: 'listar', component: ListarComponent },
{ path: 'registrar', component: RegistrarComponent }];

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    RegistrarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [VehiculoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
