class Libro {
  constructor(titulo, autor, estado) {
    this.titulo = titulo;
    this.autor = autor;
    this.estado = estado;
  }

  mostrarInfo() {
    console.log(
      `El libro "${this.titulo}" de ${this.autor} se encuentra ${this.estado}.`
    );
  }
}

const inventario = [];
const btnAgregar = document.getElementById("agregarLibroBtn");

btnAgregar.addEventListener("click", () => {
  let continuar = true;

  do {
    const titulo = prompt("Ingrese el título del libro:");
    if (!titulo) break;

    const autor = prompt("Ingrese el autor del libro:");
    if (!autor) break;

    let estado = prompt("Ingrese el estado del libro (Disponible / Prestado):");
    if (!estado) break;

    // Normalizar estado
    estado = estado.toLowerCase() === "prestado" ? "Prestado" : "Disponible";

    const nuevoLibro = new Libro(titulo, autor, estado);
    inventario.push(nuevoLibro);

    alert(`Libro "${nuevoLibro.titulo}" agregado correctamente.`);
    nuevoLibro.mostrarInfo();

    // Preguntar si quiere agregar otro libro
    continuar = confirm("¿Desea agregar otro libro?");
  } while (continuar);

  // Mostrar inventario completo al final
  console.log("--- Inventario completo ---");
  inventario.forEach(libro => libro.mostrarInfo());
});
