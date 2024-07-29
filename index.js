// Función que encripta el texto ingresado por el usuario
function encriptar() {
  // Obtiene el valor del texto ingresado por el usuario
  let texto = document.getElementById("texto").value;
  // Obtiene los elementos del DOM que se van a modificar
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");
  // Encripta el texto reemplazando las vocales con sus respectivas combinaciones de letras
  let textoCifrado = texto
    .replace(/e/gi, "enter")// Reemplaza la "e" con "enter"
    .replace(/i/gi, "imes")// Reemplaza la "i" con "imes"
    .replace(/a/gi, "ai")// Reemplaza la "a" con "ai"
    .replace(/o/gi, "ober")// Reemplaza la "o" con "ober"
    .replace(/u/gi, "ufat");// Reemplaza la "u" con "ufat"
  // Verifica si el texto ingresado no está vacío
  if (texto.length != 0) {
    // Muestra el texto encriptado en el campo de texto
    document.getElementById("texto").value = textoCifrado;
    // Muestra un mensaje de éxito en el título y oculta el párrafo
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    // Cambia la imagen del muñeco a la de encriptado
    muñeco.src = "./img/encriptado.jpg";
  } else {
    // Si el texto está vacío, muestra un mensaje de error y oculta la imagen de encriptado
    muñeco.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    // Muestra un mensaje de error con SweetAlert
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}
// Función que desencripta el texto ingresado por el usuario
function desencriptar() {
  // Obtiene el valor del texto ingresado por el usuario
  let texto = document.getElementById("texto").value;
  // Obtiene los elementos del DOM que se van a modificar
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");
  // Desencripta el texto reemplazando las combinaciones de letras con sus respectivas vocales
  let textoCifrado = texto
    .replace(/enter/gi, "e")// Reemplaza "enter" con la "e"
    .replace(/imes/gi, "i")// Reemplaza "imes" con la "i"
    .replace(/ai/gi, "a")// Reemplaza "ai" con la "a"
    .replace(/ober/gi, "o")// Reemplaza "ober" con la "o"
    .replace(/ufat/gi, "u");// Reemplaza "ufat" con la "u"
  // Verifica si el texto ingresado no está vacío
  if (texto.length != 0) {
    // Muestra el texto desencriptado en el campo de texto
    document.getElementById("texto").value = textoCifrado;
    // Muestra un mensaje de éxito en el título y oculta el párrafo
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    // Cambia la imagen del muñeco a la de desencriptado
    muñeco.src = "./img/desencriptado.jpg";
  } else {
    // Si el texto está vacío, muestra un mensaje de error y oculta la imagen de desencriptado
    muñeco.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    // Muestra un mensaje de error con SweetAlert
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}
