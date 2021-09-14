import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemperaturaService } from '../../service/temperatura.service';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent implements OnInit {

  formulario: FormGroup;
  testNumero:number;
  tiempo:any;
  name:string;
  temperatura:number;
  humedad:number;
  latitud:number;
  longitud:number;
  descripcion:string;
  showError:boolean;
  mensajeError:string;
  fechaActual = new Date();

  constructor(private formbuilder:FormBuilder,private _temperatura:TemperaturaService) {

    this.iniciaFormulario();

  }

  ngOnInit(): void {
  }

  /*
  * Metodo que inicia el fomulario con valores por defecto
  */

  iniciaFormulario(){
    this.formulario = this.formbuilder.group({
      ciudad:['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      codigo:['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
      // testNumero:[0,[Validators.required,Validators.min(1),Validators.max(20)]]
    })
  }



  consultar(){
    this.showError = false;
    console.log("datos ",this.formulario);

    this._temperatura.getEstadoTiempo(this.formulario.get('ciudad').value,this.formulario.get('codigo').value)
      .subscribe(respuesta =>{
        this.tiempo = respuesta;
        this.name = this.tiempo.name;
        this.humedad = this.tiempo.main.humidity;
        this.latitud = this.tiempo.coord.lat;
        this.longitud = this.tiempo.coord.lon;
        this.descripcion = this.tiempo.weather[0].description;
        this.temperatura = this.tiempo.main.temp ;
        this.convertirACelcius(this.temperatura);
        console.log(respuesta);
      },
       error =>{

        this.showError = true;
        this.mensajeError = "Error al consultar el tiempo. Intentelo nuevamente";

       })
  }

  convertirACelcius(temperaturaActual){

    temperaturaActual = this.temperatura * 9.0 / 5.0 + 32;

    return temperaturaActual;

  }

}
