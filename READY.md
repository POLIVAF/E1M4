E1-M4 Ejercicio
Gestor de Inventario de Biblioteca (POO) 📚
Objetivo:
Aplicar los conceptos fundamentales de la Programación Orientada a Objetos (POO) para modelar una entidad del mundo real. Crearás una clase para representar libros, instanciarás objetos a partir de ella y los gestionarás en un inventario dinámico.
Instrucciones:
1.	Definición de la Clase Libro:
o	Crea una class llamada Libro.
o	Define un constructor que acepte tres parámetros: titulo, autor y estado (ej: "Disponible", "Prestado").
o	Dentro del constructor, utiliza la palabra clave this para asignar los parámetros recibidos a las propiedades del objeto (this.titulo, this.autor, this.estado).
o	Añade un método a la clase llamado mostrarInfo() que imprima en la consola una cadena de texto formateada con los detalles del libro. Por ejemplo: console.log(El libro "${this.titulo}" de ${this.autor} se encuentra ${this.estado}.);.
2.	Inicialización del Programa:
o	Crea un array vacío llamado inventario para almacenar los objetos Libro.
3.	Carga Interactiva de Libros:
o	Implementa un bucle (while o do-while) que permita al usuario agregar múltiples libros al inventario.
o	Dentro del bucle, solicita al usuario el título, autor y estado de un libro mediante prompt().
o	Con los datos recibidos, instancia un nuevo objeto de la clase Libro (ej: const nuevoLibro = new Libro(titulo, autor, estado);).
o	Añade el objeto recién creado al array inventario usando push().
o	Pregunta al usuario si desea agregar otro libro usando confirm() para controlar la continuación del bucle.
4.	Muestra del Inventario Completo:
o	Una vez que el usuario termine de añadir libros, itera sobre el array inventario (un bucle for...of es ideal para esto).
o	Por cada libro en el inventario, llama a su método libro.mostrarInfo() para mostrar sus detalles en la consola.
Ejemplo de Salida en Consola:
--- Inventario de la Biblioteca ---
El libro "Cien Años de Soledad" de Gabriel García Márquez se encuentra Disponible.
El libro "El Señor de los Anillos" de J.R.R. Tolkien se encuentra Prestado.
El libro "1984" de George Orwell se encuentra Disponible.
Conceptos a Aplicar:
•	Programación Orientada a Objetos (POO): El paradigma central del ejercicio.
•	Clases: Uso de la palabra clave class para definir plantillas de objetos.
•	Constructor: El método especial constructor() para inicializar las propiedades de un objeto.
•	this: La palabra clave para referirse a la instancia actual del objeto.
•	Métodos: Funciones definidas dentro de una clase que definen el comportamiento de los objetos.
•	Instanciación: El proceso de crear un objeto (new) a partir de una clase.
•	Arrays de Objetos: Almacenar y gestionar múltiples instancias en una colección.
________________________________________
Entrega:
El trabajo deberá ser entregado a través de un repositorio público en GitHub. Por favor, comparte únicamen
