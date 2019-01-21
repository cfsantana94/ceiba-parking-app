import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import {MatDialogModule} from '@angular/material/dialog';
import { NotFoundComponent } from './not-found/not-found.component';
import { DialogRegistrarComponent } from './dialog-registrar/dialog-registrar.component';
import { environment } from '../environments/environment';

//ngrx modules
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducers/reducers';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store';


const NGRX_IMPORTS = [
  StoreModule.forRoot(reducers,{metaReducers}),
  StoreRouterConnectingModule.forRoot({stateKey:'router'}),
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument({
    name: 'AngularChatNgRx',
    logOnly: environment.production
  })
 ]


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    RegistrarComponent,
    HeaderComponent,
    DialogComponent,
    NotFoundComponent,
    DialogRegistrarComponent
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
    MatDialogModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [VehiculoService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent,DialogRegistrarComponent]

})
export class AppModule { }
