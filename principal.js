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

const autor = document.getElementById("autor");
const libro = document.getElementById("libro");
const mensaje = document.getElementById("paginadestino");
const boton = document.getElementById("boton");

let autorAleatorio = 0;
let libroAleatorio = 0;

mensaje.style.display = "none";

function generarBestia() {


  autorAleatorio = Math.floor(Math.random() * listaAutores.length);
  libroAleatorio = Math.floor(Math.random() * listaLibros.length);

  autor.src = listaAutores[autorAleatorio];
  libro.src = listaLibros[libroAleatorio];

  mensaje.style.display = "none";

  if (autorAleatorio === libroAleatorio) {
    paginadestino();
  }
}

function paginadestino() {

  const pagina = paginasAutores[autorAleatorio];

  mensaje.innerHTML = `
    <p>¡Has encontrado una combinación!</p>
    <a href="${pagina}">DESCUBRIR AUTOR →</a>
  `;

  mensaje.style.display = "block";

}

boton.addEventListener("click", generarBestia);

generarBestia();