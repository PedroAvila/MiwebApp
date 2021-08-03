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

}
