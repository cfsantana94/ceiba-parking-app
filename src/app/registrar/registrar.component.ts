import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../model/vehiculo.model';
import { DialogRegistrarComponent } from '../dialog-registrar/dialog-registrar.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-registrar',
    templateUrl: './registrar.component.html',
    styleUrls: ['./registrar.component.css'],
    providers: [NgbModalConfig, NgbModal]
})


export class RegistrarComponent {
    vehiculo = new Vehiculo();
    mensaje: any;
    constructor(private vehiculoService: VehiculoService, public dialog: MatDialog) { }


    registrarVehiculo() {
        this.vehiculoService.registrarVehiculo(this.vehiculo).subscribe(
            (data) => {
                this.mensaje = data;
                this.loadResponse(this.mensaje);
            }
        );
    }
    loadResponse(message: any) {
        const dialogConfig = new MatDialogConfig();
    
    
        dialogConfig.data = {
          message: message
        };
        this.dialog.open(DialogRegistrarComponent, dialogConfig);
    
      }
}