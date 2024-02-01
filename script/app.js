function  botonEncriptar(){
    let captura = document.getElementById('inputText').value;
    
    function todoMinus(){
            alert("No se permiten mayúsculas ni acentos");
            captura = captura.toLowerCase().replace(/é/g,'e').replace(/í/g,'i').replace(/á/g,'a').replace(/ó/g,'o').replace(/ú/g,'u');
    }
    todoMinus();

    let encriptar = captura.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat');

    document.getElementById('desencriptar').removeAttribute('hidden');
    document.getElementById('outputText').textContent = encriptar;
    document.querySelector('#sinMensaje').setAttribute('hidden',true);

}    

function botonDesencriptar(){
    let captura = document.getElementById('inputText').value;
    let desencriptar = captura.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u');
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