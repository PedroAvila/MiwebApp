export class LibrosService {
  private libros = ['Libro de Vaxi', 'Libro de Aritmetica', 'El Gráfico Revista'];

  agregarLibro(libroNombre: string) {
    this.libros.push(libroNombre);
  }

  obtenerLibros() {
    return [...this.libros];
  }

}
