import { ConstantPool } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html'
})

export class LibrosComponent{
  libros = ['Matematica I', 'Algoritmos Básico', 'Algoritmo Nivel Básico'];

  eliminarLibro(libro : any){
    this.libros = this.libros.filter(p => p !== libro);
  }

  guardarLibro(f : any){
    if(f.valid){
      this.libros.push(f.value.nombreLibro);
    }
  }

}
