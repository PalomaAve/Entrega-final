const listaAutores = [
  "./assets/autor1.jpeg",
  "./assets/autor2.jpeg",
  "./assets/autor3.jpeg",
  "./assets/autor4.jpeg",
];
const listaLibros = [
  "./assets/img/tronco1.jpeg",
  "./assets/img/tronco2.jpeg",
  "./assets/img/tronco3.jpeg",
  "./assets/img/tronco4.jpeg",
];


// Obtenemos los contenedores de las imágenes del HTML usando los IDs
const autor = document.getElementById("autor");
const libro = document.getElementById("libro");


// Inicializamos las variables de los números aleatorios
let autorAleatorio = 0;
let libroAleatorio = 0;

// Función para generar un número aleatorio entre dos valores
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const mensaje = document.getElementById("mensajeVictoria");
mensaje.style.display = "none";
mensaje.textContent = "";

// Función para crear una nueva bestia con tres imágenes elegidas aleatoriamente
function generarBestia() {
  // Elegimos un índice aleatorio para cada parte
  const indiceAutor = Math.floor(Math.random() * listaAutores.length);
  const indiceLibro = Math.floor(Math.random() * listaLibros.length);

  // Mostramos las imágenes seleccionadas
  autor.src = listaAutores[indiceAutor];
  libro.src = listaLibros[indiceLibro];


  // Comprobamos si las cuatro partes tienen el mismo índice
  if (
    indiceAutor === indiceLibro
  ) {
    mostrarVictoria();
  } else {
mensaje.style.display = "none";
  }
}

  const sonido = new Audio("./assets/img/musica/bruja.mp3");
  sonido.load()

   sonido.play().catch((error) => {
    console.error("Error al reproducir la victoria:", error);

})
}

// Generamos un nuevo collage cada vez que hacemos click en el botón "mezclar"
boton.addEventListener("click", function () {
  generarBestia();
});

generarBestia();
