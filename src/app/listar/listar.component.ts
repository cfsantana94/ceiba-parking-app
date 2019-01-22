import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../model/vehiculo.model';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { TouchSequence } from 'selenium-webdriver';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [NgbModalConfig, NgbModal]
})


export class ListarComponent implements OnInit {
  vehiculos: Vehiculo[];
  mensaje: string;
  valorACobrar: number;
  constructor(private vehiculoService: VehiculoService, public dialog: MatDialog) {

  }


  ngOnInit() {
    this.cargarLista();
  }

  cargarLista() {
    this.vehiculoService.getAll().subscribe(data => {
      console.log(data);
      this.vehiculos = data
    });
  }

  
  salidaVehiculo(vehiculo: Vehiculo) {

    this.vehiculoService.salidaVehiculo(vehiculo).subscribe(
      data => {
        this.valorACobrar = data;
        this.loadResponse(this.valorACobrar);
        this.cargarLista();
      }
    );
  }

  loadResponse(message: any) {
    const dialogConfig = new MatDialogConfig();


    dialogConfig.data = {
      message: message
    };
    this.dialog.open(DialogComponent, dialogConfig);

  }

  headElements = ['Tipo Vehiculo', 'Placa', 'Fecha Entrada', 'Cilindraje'];
}
