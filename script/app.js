function  botonEncriptar(){   //¡Inicia Encriptación!    
    let = captura = document.getElementById('inputText').value;
    validacion(); //Inicia validación
    let encriptar = captura.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat').replace(/y/g,'imeyes');
    document.getElementById('outputText').textContent = encriptar;
    cambioAtributos();//Cambios en codigo HTML 
}

function botonDesencriptar(){ //¡Inicia Desencriptación!
    let captura = document.getElementById('inputText').value;
    validacion(); //También debe tener validación
    let desencriptar = captura.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u').replace(/imeyes/g,'y');
    document.getElementById('outputText').textContent = desencriptar;
    cambioAtributos(); 
}

function validacion(){ //Validacion de texto capturado
    if (captura === "" || undefined){ //Validación de espacio en blanco o no definido
        alert("Ingresa Texto a Encriptar/Desencriptar");
        throw new Error("casilla en blanco");
    }else{    
        let resultado = [];//Validación de mayúsculas
        let palabras = captura.split("");
            for (let palabra of palabras){
                if(/[A-Z]/.test(palabra)){
                    resultado.push(palabra);
                    console.log(resultado);
                    alert("Se han encontrado palabras con mayúsculas");
                    throw new Error("Se han encontrado palabras con mayúsculas");
                }
            }
        let resultado2 = [];//Validación de acentos, simbolos o números
        let acentos = captura.split("");
            for (let acento of acentos){
                if(/[^a-z^¡!^\s]/.test(acento)){
                    resultado2.push(acento);
                    console.log(resultado2);
                    alert("Se han encontrado palabras con acentos, simbolos o números");
                    throw new Error("Se han encontrado palabras con acentos, símbolos o números");
                }
            }
    }     
}

function cambioAtributos(){ //Cambio de atributos en etiquetas
    document.getElementById('desencriptar').removeAttribute('hidden');
    document.querySelector('#sinMensaje').setAttribute('hidden',true);
    document.querySelector('#imagenBusqueda').setAttribute('hidden',true);
    document.querySelector('#imagenConLupa').setAttribute('hidden',true);
}

function copiarTexto(){ // Botón copiar texto
    let outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0,99999);
    navigator.clipboard.writeText(outputText.value);
    limpiarTexto();
}

function limpiarTexto(){ //Función limpiar área de texto
    document.getElementById('outputText').textContent='';
    document.getElementById('inputText').value='';
    document.querySelector('#desencriptar').setAttribute('hidden',true);
    document.getElementById('sinMensaje').removeAttribute('hidden');
    document.getElementById('imagenBusqueda').removeAttribute('hidden');
    document.getElementById('imagenConLupa').removeAttribute('hidden');
}