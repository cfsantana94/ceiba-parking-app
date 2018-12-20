import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../model/vehiculo.model';


@Component({
    selector: 'app-registrar',
    templateUrl: './registrar.component.html',
    styleUrls: ['./registrar.component.css']
})

export class RegistrarComponent {
    vehiculo = new Vehiculo();
    mensaje: string;
    constructor(private vehiculoService: VehiculoService) { }


    registrarVehiculo() {
        this.vehiculoService.registrarVehiculo(this.vehiculo).subscribe(
            data => {
                this.mensaje = data;
            }

        );
    }
}