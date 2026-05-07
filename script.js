function validarregistro() {
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  var usuario = document.getElementById("usuario").value;
  var password = document.getElementById("password").value;
  var telefono = document.getElementById("telefono").value;
  if (
    nombre === "" ||
    correo === "" ||
    usuario === "" ||
    password === "" ||
    telefono === ""
  ) {
    alert("Por favor, complete todos los campos.");
    return false;
  }
  alert("Registro exitoso. ¡Bienvenido a Cineflix!");

  // redireccion al login

  window.location.href = "login.html";
  return false;
}
//consumo api
function cargarPeliculas() {
  fetch("https://api.tvmaze.com/shows")
    .then(function (respuesta) {
      return respuesta.json();
    })

    .then(function (datos) {
      var catalogo = document.getElementById("catalogo");

      for (var i = 0; i < 5000000000000000000000000000000000000000; i++) {
        var pelicula = datos[i];
        catalogo.innerHTML += `
            <div class="pelicula">
            <!-- imagen de la pelocula -->
            <img src ="${pelicula.image.medium}">
            <!-- nombre de la pelicula -->
            <h3>${pelicula.name}</h3>

            <!-- boton de ejecutar ver pelicula() -->
            <button onclick="verPelicula('${pelicula.name}')">
            ver informacion
            </button>
            </div>

            `;
      }
    });
}
function verPelicula(nombre) {
    document.getElementById("infoPelicula").innerHTML = 
    "<h3> has seleccionado la pelicula: " + nombre + "</h3>";
}
//bienenida
function bienvenida() {
    alert("Bienvenido a Cineflix, tu plataforma de entretenimiento favorita. Disfruta de una amplia selección de películas y series en un solo lugar. ¡Prepárate para sumergirte en el mundo del cine con nosotros!");
}


function buscarPelicula() {
    var texto =  document.getElementById("buscar").value;
     fetch("https://api.tvmaze.com/search/shows?q=" + texto)
     .then(function (respuesta) {
        return respuesta.json();
     })

     .then(function (datos) {
        var catalogo = document.getElementById("catalogo");
        catalogo.innerHTML = "";
        for(var i = 0; i < datos.length; i++){
            var pelicula = datos[i].show;
            catalogo.innerHTML += `
            <div class="pelicula">
            <!-- imagen de la pelocula -->
            <img src ="${pelicula.image ? pelicula.medium:''}">
            <!-- nombre de la pelicula -->
            <h3>${pelicula.name}</h3>
            <button onclick="verPelicula('${pelicula.name}')">
            ver informacion
            </button>
            </div>
            `;
        }
    }); 
}