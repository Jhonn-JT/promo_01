import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { CrudService } from '../../servicio/crud.service';
import {FormGroup,FormBuilder} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Empleado } from '../../servicio/empleado';

@Component({
  selector: 'app-editar-empleado',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './editar-empleado.component.html',
  styleUrl: './editar-empleado.component.css'
})
export class EditarEmpleadoComponent {
elID:any;
formularioDeEmpleados:FormGroup;
constructor(
private activeRoute:ActivatedRoute,
private crudService:CrudService,
public formulario:FormBuilder,
private ruteador:Router
){
  this.elID=this.activeRoute.snapshot.paramMap.get('id');
  console.log(this.elID);
  this.crudService.obtenerUnEmpleado(this.elID).subscribe(
    respuesta=>{
      console.log(respuesta);
      this.formularioDeEmpleados.setValue({
        // nombre:respuesta[0]['nombre'],
        // precio:respuesta[0]['precio'],
        // cupo:respuesta[0]['cupo'],
        // contacto:respuesta[0]['contacto'],
        // descripcion:respuesta[0]['descripcion'],
        // destino:respuesta[0]['destino'],
        // duracion:respuesta[0]['duracion'],

    codigo_camara:respuesta[0]['codigo_camara'],
    modelo:respuesta[0]['modelo'],
    marca:respuesta[0]['marca'],
    preccio:respuesta[0]['preccio'],
    resolucion:respuesta[0]['resolucion'],
    tipo:respuesta[0]['tipo'],
    proveedor:respuesta[0]['proveedor'],
    garantia:respuesta[0]['garantia'],
    peso:respuesta[0]['peso'],
    dimensiones:respuesta[0]['dimensiones'],
    tipo_sensor:respuesta[0]['tipo_sensor'],
    lente_incluido:respuesta[0]['lente_incluido'],
    tipo_almacenamiento:respuesta[0]['tipo_almacenamiento'],
    bateria:respuesta[0]['bateria'],
    observaciones:respuesta[0]['observaciones']

      });
    }
  );
  this.formularioDeEmpleados=this.formulario.group({
    // nombre:[''],
    // precio:[''],
    // cupo:[''],
    // contacto:[''],
    // descripcion:[''],
    // destino:[''],
    // duracion:[''],

    codigo_camara:[''],
    modelo:[''],
    marca :[''],
    preccio:[''],
    resolucion:[''],
    tipo:[''],
    proveedor:[''],
    garantia:[''],
    peso:[''],
    dimensiones:[''],
    tipo_sensor:[''],
    lente_incluido:[''],
    tipo_almacenamiento:[''],
    bateria:[''],
    observaciones:['']

  });
}

enviarDatos():any{
  console.log(this.elID);
  console.log(this.formularioDeEmpleados.value);
  this.crudService.editarEmpleado(this.elID,this.formularioDeEmpleados.value).subscribe(()=>{

  this.ruteador.navigateByUrl('/listar-empleado');
  });
}
}
