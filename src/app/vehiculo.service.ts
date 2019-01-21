import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { Vehiculo } from './model/vehiculo.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(private http: HttpClient) { 
  }

  getAll(): Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>('http://localhost:8081/parqueadero/listarVehiculosParqueados')
  }

  salidaVehiculo(vehiculo: Vehiculo): Observable<any> {
    return this.http.post<Vehiculo>('http://localhost:8081/parqueadero/sacarVehiculo',vehiculo)
  }

  registrarVehiculo(vehiculo : Vehiculo){
    return this.http.post('http://localhost:8081/parqueadero/ingresarVehiculo',vehiculo)
  }
  
}
