class Cancion {
    constructor(id, title, artist, gender, duration, image, favorite = false) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.gender = gender;
        this.duration = duration;
        this.image = image;
        this.favorite = favorite;
    }
};

// boton login
let btnLogin = document.querySelector("#btn-login");

let usuario = JSON.parse(localStorage.getItem("user")) || null;

if (btnLogin) {
    if (usuario) {
        btnLogin.innerText = usuario;
    } else {
        btnLogin.innerText = "Log In";
    }
    document.querySelector("#btn-login").addEventListener("click", sesion);
};

// funcion de inicio de sesion
function sesion () {
    if (usuario) {
        localStorage.removeItem("user");
        btnLogin.innerText = "Log In";
        location.replace("http://localhost:5501/pages/sobreNosotros.html");
    } else {
        location.replace("http://localhost:5501/pages/logIn.html");
    };
};