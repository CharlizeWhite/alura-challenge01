function  botonEncriptar(){   
    let captura = document.getElementById('inputText').value;
    
    let resultado = [];
    let palabras = captura.split("");
        for (let palabra of palabras){
            if(/[A-Z]/.test(palabra)){
                resultado.push(palabra);
                console.log(resultado);
                alert("Se han encontrado palabras con mayúsculas");
                throw new Error("Se han encontrado palabras con mayúsculas");
                
            }
        }
        let resultado2 = [];
        let acentos = captura.split("");
        for (let acento of acentos){
            if(/[^a-z^\s]/.test(acento)){
                resultado2.push(acento);
                console.log(resultado2);
                alert("Se han encontrado palabras con acentos, simbolos o números");
                throw new Error("Se han encontrado palabras con acentos, símbolos o números");
                
            }
        }
    let encriptar = captura.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat').replace(/y/g,'imeyes');
    
    document.getElementById('desencriptar').removeAttribute('hidden');
    document.getElementById('outputText').textContent = encriptar;
    document.querySelector('#sinMensaje').setAttribute('hidden',true); 
    }



    

function botonDesencriptar(){
    let captura = document.getElementById('inputText').value;
    let desencriptar = captura.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u').replace(/imeyes/g,'y');
 document.getElementById('desencriptar').removeAttribute('hidden');
    document.getElementById('outputText').textContent = desencriptar;
    document.querySelector('#sinMensaje').setAttribute('hidden',true);
}

function copiarTexto(){
    let outputText = document.getElementById('outputText');
    let textoModificado = outputText.textContent;
    
    outputText.select();
    outputText.setSelectionRange(0,99999);

    navigator.clipboard.writeText(outputText.value);

   // alert("Texto copiado al portapapeles: " + textoModificado);
    
    limpiarTexto();
}

function limpiarTexto(){
    document.getElementById('outputText').textContent='';
    document.getElementById('inputText').value='';
    document.querySelector('#desencriptar').setAttribute('hidden',true);
    document.getElementById('sinMensaje').removeAttribute('hidden');
}