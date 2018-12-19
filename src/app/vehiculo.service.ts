import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
