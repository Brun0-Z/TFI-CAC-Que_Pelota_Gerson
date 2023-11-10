const regexNombre = /^[A-Za-z]+$/;
const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexTel = /^\+\d{1,3}\d{1,14}$/;

function validar() {
  let usuario = document.getElementById("usuario");
  let mail = document.getElementById("mail");
  let tel = document.getElementById("tel");
  let asunto = document.getElementById("asunto");
  let error = false;

  document.getElementById("validar_usuario").innerHTML = "";
  document.getElementById("validar_mail").innerHTML = "";
  document.getElementById("validar_tel").innerHTML = "";
  document.getElementById("validar_asunto").innerHTML = "";

  ///Nombre
  if (usuario.value == "") {
    document.getElementById("validar_usuario").innerHTML =
      "El nombre no debe ser vacío";
    error = true;
    usuario.focus();
  }

  if (!regexNombre.test(usuario.value)) {
    document.getElementById("validar_usuario").innerHTML = "Nombre no válido";
    error = true;
    usuario.focus();
  }

  ///Mail
  if (mail.value == "") {
    document.getElementById("validar_mail").innerHTML =
      "El mail no debe ser vacío";
    error = true;
    mail.focus();
  }

  if (!regexMail.test(mail.value)) {
    document.getElementById("validar_mail").innerHTML =
      "Indicar un mail válido";
    error = true;
    mail.focus();
  }

  ///Tel
  if (tel.value == "") {
    document.getElementById("validar_tel").innerHTML =
      "El teléfono no debe ser vacío";
    error = true;
    tel.focus();
  }

  if (!regexTel.test(tel.value)) {
    document.getElementById("validar_tel").innerHTML = "Teléfono no válido";
    error = true;
    tel.focus();
  }

  ///Asunto
  if (asunto.value == "") {
    document.getElementById("validar_asunto").innerHTML =
      "El asunto no puede estar vacío";
    error = true;
    asunto.focus();
  }

  if (error == false) {
    document.getElementById("usuario").innerHTML = "";
    document.getElementById("mail").innerHTML = "";
    document.getElementById("tel").innerHTML = "";
    document.getElementById("asunto").innerHTML = "";
    document.getElementById("validar_usuario").innerHTML = "";
    document.getElementById("validar_mail").innerHTML = "";
    document.getElementById("validar_tel").innerHTML = "";
    document.getElementById("validar_asunto").innerHTML = "";
  }

  return !error;
}
