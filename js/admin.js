// captura de elementos de admin.html
let main = document.querySelector("#main");

// tabla y su cuerpo

let contenedorTabla = document.querySelector("#contenedor-tabla");
let cuerpoTabla = document.querySelector("#cuerpo-tabla");


let canciones = JSON.parse(localStorage.getItem("canciones")) || [];

// Viene del modal de admin.html
const myModal = new bootstrap.Modal(document.getElementById("productoModal"));

let indexUpdate = null;


// Funcion validar usuario
const validarUsuario = () => {
    let usuario = JSON.parse(localStorage.getItem("user")) || null;

    if (usuario) {
        cargarTabla();
    } else {
        main.innerHTML = "";

        let col = document.createElement("div");
        col.classList = "row mt-3";
        let contenido = `<div class="col">
        <div class="alert alert-danger" role="alert">
        No tiene permisos para acceder a esta página!
        </div>
        </div>
        `;
        col.innerHTML = contenido;
        main.append(col);
    }
};

// Funcion para cargar tabla
/* estructura tabla
<tr>
    <th scope="row">Dance The Night</th>
    <td>Dua Lipa</td>
    <td>Pop</td>
    <td>2:57</td>
</tr>
*/

const cargarTabla = () => {
    cuerpoTabla.innerHTML = "";
    canciones.forEach((cancion) => {
        let tableRow = document.createElement("tr");
        let contenidoHTML = `
        <th scope="row">${cancion.title}</th>
        <td>${cancion.artist}</td>
        <td>${cancion.gender}</td>
        <td>${cancion.duration}</td>
        <td>
        <div class="d-flex gap-3 tableColor">
        <i class="fa fa-pencil puntero tableColor"  onclick="abrirModal(${cancion.id})" aria-hidden="true"></i>
        <i class="fa fa-trash puntero tableColor"  onclick="eliminarCancion(${cancion.id})" aria-hidden="true"></i>
        </div>
        </td>
    
        `;
        tableRow.innerHTML = contenidoHTML;
        cuerpoTabla.append(tableRow);
    });
};

// Funcion guardar nueva cancion
const guardarCancion = (event) => {
    event.preventDefault();

    let id = canciones.at(-1).id + 1;

    let titulo = document.querySelector("#titulo").value;
    let artista = document.querySelector("#artista").value;
    let genero = document.querySelector("#genero").value;
    let duracion = document.querySelector("#duracion").value;
    let imagen = document.querySelector("#imagen").value;

    let cancion = new Cancion (id, titulo, artista, genero, duracion, imagen);

    canciones.push(cancion);

    localStorage.setItem("canciones", JSON.stringify(canciones));

    document.querySelector("#titulo").value = "";
    document.querySelector("#artista").value = "";
    document.querySelector("#genero").value = "";
    document.querySelector("#duracion").value = "";
    document.querySelector("#imagen").value = "";
    
    cargarTabla();
};


// Funcion eliminar cancion

const eliminarCancion = (id)=>{
    let nuevoArreglo = canciones.filter((cancion) => {
        return cancion.id != id;
    });
    let validar = confirm(`Esta seguro que desea eliminar la cancion con el id ${id}`);
    if (validar){
        canciones = [...nuevoArreglo];
        localStorage.setItem("canciones", JSON.stringify(canciones));
        cargarTabla();
    }
};

// Funcion modificar cancion

// Abrir el modal
const abrirModal = (id) => {
    indexUpdate = canciones.findIndex((item) => {
        return item.id == id;
    });
    document.querySelector("#tituloModal").value = canciones[indexUpdate].title;
    document.querySelector("#artistaModal").value = canciones[indexUpdate].artist;
    document.querySelector("#generoModal").value = canciones[indexUpdate].gender;
    document.querySelector("#duracionModal").value = canciones[indexUpdate].duration;
    document.querySelector("#imagenModal").value = canciones[indexUpdate].image;

    myModal.show();
};
// Actualizar producto
const actualizarCancion = (event) => {
    event.preventDefault();

    canciones[indexUpdate].title = document.querySelector("#tituloModal").value;
    canciones[indexUpdate].artist = document.querySelector("#artistaModal").value;
    canciones[indexUpdate].gender = document.querySelector("#generoModal").value;
    canciones[indexUpdate].duration = document.querySelector("#duracionModal").value;
    canciones[indexUpdate].image = document.querySelector("#imagenModal").value;

    localStorage.setItem("canciones", JSON.stringify(canciones));

    cargarTabla();

    myModal.hide();
};


cargarTabla();