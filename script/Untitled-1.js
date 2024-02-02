// Función que recibe un texto como input y localiza las palabras con letras mayúsculas
function localizarMayusculas(texto) {
  // Crear una variable para almacenar el resultado
  let resultado = [];
  // Dividir el texto en palabras por los espacios
  let palabras = texto.split(" ");
  // Recorrer las palabras una por una
  for (let palabra of palabras) {
    // Comprobar si la palabra tiene alguna letra mayúscula
    if (/[A-Z]/.test(palabra)) {
      // Añadir la palabra al resultado
      resultado.push(palabra);
    }
  }
  // Devolver el resultado
  return resultado;
}

// Ejemplo de uso
let texto = "Hola, me llamo José y vivo en México";
let resultado = localizarMayusculas(texto);
console.log(resultado);
// [ 'José', 'México' ]

// Crear una alerta que detenga la función si encuentra alguna palabra con mayúscula
if (resultado.length > 0) {
  // Mostrar un mensaje de alerta con las palabras encontradas
  alert("Se han encontrado las siguientes palabras con mayúsculas: " + resultado.join(", "));
  // Detener la ejecución de la función
  throw new Error("Se ha detenido la función por encontrar mayúsculas");
}