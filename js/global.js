class Cancion {
    constructor(id, title, artist, gender, duration, image, favorite = false, artistaimage, song1, song2, song3) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.gender = gender;
        this.duration = duration;
        this.image = image;
        this.favorite = favorite;
        this.artistaimage = artistaimage;
        this.song1 = song1;
        this.song2 = song2;
        this.song3 = song3;
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
        location.replace("http://localhost:5501/index.html");
    } else {
        location.replace("http://localhost:5501/pages/logIn.html");
    };
};