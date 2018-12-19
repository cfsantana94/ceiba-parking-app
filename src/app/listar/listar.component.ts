import { Component, OnInit } from '@angular/core';
import {VehiculoService} from '../vehiculo.service';
import { Vehiculo } from '../model/vehiculo.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  vehiculo : Vehiculo[];

  constructor(private vehiculoService : VehiculoService) { }
  

  ngOnInit() {
    this.vehiculoService.getAll().subscribe(data=> {
      console.log(data);
      this.vehiculo = data
    });
  }
  
  headElements = [ 'Tipo Vehiculo','Placa','Fecha Entrada','Fecha Salida','Cilindraje','Valor A Pagar'];
}
