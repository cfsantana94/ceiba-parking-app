import { Component, OnInit } from '@angular/core';
import {VehiculoService} from '../vehiculo.service';
import { Vehiculo } from '../model/vehiculo.model';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ListarComponent implements OnInit {
  vehiculos : Vehiculo[];
  mensaje : string;
  vehiculoSelec : Vehiculo;
  constructor(private vehiculoService : VehiculoService) {

  }
  

  ngOnInit() {
    this.cargarLista();
  }

  cargarLista(){
    this.vehiculoService.getAll().subscribe(data=> {
      console.log(data);
      this.vehiculos = data
    });
  }
  salidaVehiculo(vehiculo:Vehiculo){

    this.vehiculoService.salidaVehiculo(vehiculo).subscribe(
      data => {
        this.vehiculoSelec = data;
      }
    );
    window.location.reload();
  }
  
  headElements = [ 'Tipo Vehiculo','Placa','Fecha Entrada','Cilindraje'];
}
