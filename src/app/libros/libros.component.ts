import { ConstantPool } from "@angular/compiler";
import { Component } from "@angular/core";
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html'
})

export class LibrosComponent{
  // libros = ['Matematica I', 'Algoritmos Básico', 'Algoritmo Nivel Básico'];
 libros : string[] = [];
  constructor(private librosService: LibrosService){
    this.libros = librosService.obtenerLibros();
  }

  eliminarLibro(libro : any){

  }

  guardarLibro(f : any){
    if(f.valid){

    }
  }

}
