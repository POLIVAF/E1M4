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

function iniciarCargaLibros() {
  let continuar = true;

  while (continuar) {
    // Título
    let titulo = "";
    while (!titulo) {
      titulo = prompt("Ingrese el título del libro:");
      if (titulo === null) return; // cancelar
      if (!titulo) alert("Debes ingresar un título para continuar.");
    }

    // Autor
    let autor = "";
    while (!autor) {
      autor = prompt("Ingrese el autor del libro:");
      if (autor === null) return; // cancelar
      if (!autor) alert("Debes ingresar un autor para continuar.");
    }

    // Estado
    let estado = "";
    while (!estado) {
      estado = prompt("Ingrese el estado del libro (Disponible / Prestado):");
      if (estado === null) return; // cancelar
      estado = estado.toLowerCase() === "prestado" ? "Prestado" : "Disponible";
    }

    // Crear libro y agregar
    const nuevoLibro = new Libro(titulo, autor, estado);
    inventario.push(nuevoLibro);

    alert(`Libro "${nuevoLibro.titulo}" agregado correctamente.`);
    nuevoLibro.mostrarInfo();

    continuar = confirm("¿Desea agregar otro libro?");
  }

  console.log("--- Inventario completo ---");
  inventario.forEach(libro => libro.mostrarInfo());
}

// Enlazar evento al botón
const btnAgregar = document.getElementById("agregarLibroBtn");
btnAgregar.addEventListener("click", iniciarCargaLibros);
