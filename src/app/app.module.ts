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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [{ path: 'listar', component: ListarComponent },
{ path: 'registrar', component: RegistrarComponent }];

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    RegistrarComponent,
    HeaderComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [VehiculoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
