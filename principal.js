const listaAutores = [
  "./assets/autor1.jpeg",
  "./assets/autor2.jpeg",
  "./assets/autor3.jpeg",
  "./assets/autor4.jpeg",
];

const listaLibros = [
  "./assets/libro1.jpg",
  "./assets/libro2.jpg",
  "./assets/libro3.jpg",
  "./assets/libro4.jpg",
];

const paginasAutores = [
  "autor1.html",
  "autor2.html",
  "autor3.html",
  "autor4.html",
];


const tarjetaAutor = document.getElementById("autorAleatorio");
const tarjetaLibro = document.getElementById("libroAleatorio");
const mensaje = document.getElementById("resultado");

const botonGenerar = document.getElementById("generarCombinacion");
const botonDescubrir = document.getElementById("descubrir");


let autorAleatorio = 0;
let libroAleatorio = 0;
let paginaEncontrada = "";

botonDescubrir.disabled = true;

function generarBestia() {

  autorAleatorio = Math.floor(Math.random() * listaAutores.length);
  libroAleatorio = Math.floor(Math.random() * listaLibros.length);

  tarjetaAutor.innerHTML = `
    <img src="${listaAutores[autorAleatorio]}" alt="Autor aleatorio">
    <p>AUTOR ${autorAleatorio + 1}</p>
  `;

  tarjetaLibro.innerHTML = `
    <img src="${listaLibros[libroAleatorio]}" alt="Libro aleatorio">
    <p>LIBRO ${libroAleatorio + 1}</p>
  `;

  tarjetaAutor.classList.add("activa");
  tarjetaLibro.classList.add("activa");

  mensaje.classList.remove("exito", "error");
  paginaEncontrada = "";
  botonDescubrir.disabled = true;

  if (autorAleatorio === libroAleatorio) {

    paginaEncontrada = paginasAutores[autorAleatorio];

    mensaje.innerHTML = `
      <span>¡EL DESTINO HA HABLADO!</span>
      <p>Has encontrado la combinación correcta.</p>
    `;

    mensaje.classList.add("exito");

    botonDescubrir.disabled = false;

  } else {

    mensaje.innerHTML = `
      <span>LAS PALABRAS NO HAN COINCIDIDO</span>
      <p>Esta vez no encontraste la combinación correcta. ¡Inténtalo de nuevo!</p>
    `;

    mensaje.classList.add("error");
  }
}

botonGenerar.addEventListener("click", generarBestia);

botonDescubrir.addEventListener("click", function() {

  if (paginaEncontrada !== "") {
    window.location.href = paginaEncontrada;
  }

});

generarBestia();