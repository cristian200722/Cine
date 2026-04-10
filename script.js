function validarregistro() {
var nombre = document.getElementById("nombre").value;
var correo = document.getElementById("correo").value;
var usuario = document.getElementById("usuario").value;
var password = document.getElementById("password").value;
 var telefono = document.getElementById("telefono").value;
if (nombre === "" || correo === "" || usuario === "" || password === "" || telefono === "") {
    alert("Por favor, complete todos los campos.");
    return false;       
} 
   
    


    if (telefono.length < 10) {
        alert("El número de teléfono debe tener al menos 10 dígitos.");
        return false ;
    }   
    else {
        alert("Registro exitoso. ¡Bienvenido a CINEFLIX!");
    }
}
