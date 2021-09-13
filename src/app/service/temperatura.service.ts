import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlBase:string = 'http://api.openweathermap.org/data/2.5/weather';
const idApi:string = '2df4f6c61c0fb68b3cf83669ca830068';


@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {


  constructor(private http:HttpClient) { }

  /**
   * metodo que recibe los parametros y consulta en la api
   * @param ciudad parametro del formulario
   * @param codigo parametro del formulario
   */
  getEstadoTiempo(ciudad:string, codigo:string){
    const url =`${urlBase}?q=${ciudad},${codigo}&appid=${idApi}`;

    return this.http.get(url);

  }
}
