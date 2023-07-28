// captura de elementos de admin.html
let main = document.querySelector("#main");

// tabla y su cuerpo
let contenedorTabla = document.querySelector("#contenedor-tabla");
let cuerpoTabla = document.querySelector("#cuerpo-tabla");


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
            <div class="d-flex gap-2">
                <i class="fa fa-pencil puntero" onclick="abrirModal(${cancion.id})" aria-hidden="true"></i>
                <i class="fa fa-trash puntero" onclick="eliminarProducto(${cancion.id})" aria-hidden="true"></i>
            </div>
        </td>
        `;

        tableRow.innerHTML = contenidoHTML;
        cuerpoTabla.append(tableRow);
    });
};

// Funcion eliminar cancion

const eliminarCancion = (id)=>{
    let nuevoArreglo = canciones.filter((cancion) => {
        return cancion.id != id;
    });
    // console.log(nuevoArreglo);
    let validar = confirm(`Esta seguro que desea eliminar la cancion con el id ${id}`);
    if (validar){
        canciones = [...nuevoArreglo];
        localStorage.setItem("canciones", JSON.stringify(canciones));
    }
};

cargarTabla();