function validar() { // Validación de datos

  var nombre = document.getElementById("nombre").value;
  var apellidos = document.getElementById("apellidos").value;
  var email = document.getElementById("email").value;
  var edad = document.getElementById("DPC_edit1_DD/MM/YYYY").value;
  var provincia = document.getElementById("provincia").value;


  var valido = true;
  // CONTROLES DE VALIDACIÓN:
  // El nombre ha sido introducido, y no a espacios en blanco o números
  if (nombre.length == 0 || parseInt(nombre)) {
    document.getElementById("nombreHelp").style.visibility = "visible";
    valido = false;
  }
  // Los apellidos han sido introducidos, y no a espacios en blanco o números
  if (apellidos.length == 0 || parseInt(apellidos)) {
    document.getElementById("apellidosHelp").style.visibility = "visible";
    valido = false;
  }
  if (!(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email))) {

    document.getElementById("emailHelp").style.visibility = "visible"
    valido = false
  }
  if (edad == "") {
    document.getElementById("EdadHelp").style.visibility = "visible";
    valido = false;
  }

  // La provincia no puede ser 0 (no haber elegido ninguna)
  if (provincia == 0) {
    document.getElementById("provinciaHelp").style.visibility = "visible";
    valido = false;
  }

  // Es obligatorio haber marcado la casilla 
  if (!aceptar.checked) {
    document.getElementById("aceptarHelp").style.visibility = "visible";
    valido = false;
  }
  return valido; // devuelve false si alguna comprobación ha fallado
}

function quitarError(msg) {
  // Cada vez que se camibia un campo, se elimina mensaje de error
  document.getElementById(msg).style.visibility = "hidden";
}

function limpiarResultado() {
  // Cada vez que se pulsa el botón submit, se elimina el resultado anterior
  document.getElementById('resultado').innerHTML = "";
}