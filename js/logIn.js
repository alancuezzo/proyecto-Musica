//Perfil de ejemplo
const admin = {
  correo: "admin@admin.com",
  password: "12345678",
};

//Funcion logIn

const logIn = (event) => {
  event.preventDefault();

  //Obtengo los valores
  let correo = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  //Validar los valores
  //   if(correo===admin.correo && password===admin.password)
  if (correo === admin.correo) {
    if (password === admin.password) {
      //Enviamos al localS
      localStorage.setItem("user", JSON.stringify(correo));

      //Ir a adminitracion
      location.replace("./admin.html");
    }
  } else {
    alert("El correo o la contraseña es incoreecta!");
  }
};

//Escuchadores de eventos
document.getElementById("formulario").addEventListener("submit", logIn);

//Escuchadores de eventos
// document.getElementById("formulario").addEventListener("submit", logIn);

