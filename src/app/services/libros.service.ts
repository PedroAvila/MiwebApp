import { Subject } from "rxjs";


export class LibrosService {


  librosSubject = new Subject();
  private libros = ['Libro de Vaxi', 'Libro de Aritmetica', 'El Gráfico Revista'];

  agregarLibro(libroNombre: string) {
    this.libros.push(libroNombre);
    this.librosSubject.next();
  }

  obtenerLibros() {
    return [...this.libros];
  }

}
