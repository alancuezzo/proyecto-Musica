const parametro = new URLSearchParams(location.search);
const idCancion = parametro.get("id");

let contenedor = document.querySelector("#contenedor");

// let canciones = JSON.parse(localStorage.getItem("canciones")) || [];

let cancionEncontrada; 

const traeDatos = () => {
  cancionEncontrada = canciones.find((item) => item.id == idCancion);

  if (cancionEncontrada) {
    let col = document.createElement("div");
    col.classList = "col";

    let tarjeta = `
    <div class="card mb-3">
    <div class="row g-8">
      <div class="image-title-container"> 
        <div class="img-artist">
          <img src="${cancionEncontrada.artistaimage}" class="img-fluid rounded-start p-3" alt="${cancionEncontrada.title}">
        </div>
        <h5 class="card-title"> ${cancionEncontrada.artist}</h5>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <br>
          <br>
          <h4>Canciones Populares</h4>
          <ul>
            <li class="popular" id="detalle1"><a>${cancionEncontrada.title} - ${cancionEncontrada.artist}</a></li>
            <li class="popular"><a href="/pages/error404.html">${cancionEncontrada.song1} - ${cancionEncontrada.artist}</a></li>
            <li class="popular"><a href="/pages/error404.html">${cancionEncontrada.song2} - ${cancionEncontrada.artist}</a></li>
            <li class="popular"><a href="/pages/error404.html">${cancionEncontrada.song3} - ${cancionEncontrada.artist}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
`;

    col.innerHTML = tarjeta;
    contenedor.append(col);
  } else {
    console.log("No se encuentra la canción con el id solicitado");
  }
};

traeDatos();

const detalleCancion1 = document.getElementById('detalle1');
const miVentanaModal = document.getElementById('miVentanaModal');
const imagen = document.getElementById('imagen');
const cancion = document.getElementById('cancion');
const artista = document.getElementById('artista');
const genero = document.getElementById('genero');
const duracion = document.getElementById('duracion');
const closeModal = document.querySelector('.close-modal');

detalleCancion1.addEventListener('click', () => {
  mostrarObjeto(cancionEncontrada);
});

function mostrarObjeto(cancionEncontrada) {
  imagen.src = cancionEncontrada.image; 
  cancion.textContent = cancionEncontrada.title;
  artista.textContent = cancionEncontrada.artist;
  genero.textContent = cancionEncontrada.gender;
  duracion.textContent = cancionEncontrada.duration;

  miVentanaModal.classList.add('modal-show');
}


function cerrarModal() {
  miVentanaModal.classList.remove('modal-show');
}

closeModal.addEventListener('click', cerrarModal);
