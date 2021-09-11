import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formbuilder:FormBuilder) {

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
      codigo:['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]]
    })
  }


  consultar(){
    console.log("datos ",this.formulario);

  }

}
