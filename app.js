//declaramos el DOM para traer elementos hmtl a js

//funcion para encriptar

function encriptarTexto(){

    var inputUsuario = document.getElementById('input-box').value;//traemos el texto del textarea
    var inputEncriptado = inputUsuario.replace(/[eiaou]/g, function encriptarTexto(texto) { //Expresion regular [eiaou] para buscar caracteres especificos en el texto
                                                       //usamos la g para indicar que la busqueda sera global, es decir, que buscara todas las 'e' o las 'i' existentes en el textaera
        switch(texto) { //usamos un switch para recorrer el texto
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'a':
                return 'ai';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
            default:
                return texto; ///retornamos el texto
        }
    });
    
    document.getElementById('output-box').textContent = inputEncriptado; ///pasamos el texto encriptado al output-box o caja de salida
}

//document.getElementById('encript').addEventListener('click', encriptarTexto); alternativa al 'onclick' del lado del html
//le asignamos el evento 'click' al boton de encriptar, y pasamos como parametro la funcion que encripta el texto,
//es decir, cada que se presione el boton se llamara a la funcion encriptar


//Funcion para desencriptar 

function desencriptarTexto(){

    var inputUsuario = document.getElementById('input-box').value;//traemos el texto del textarea
    var inputDesencriptado = inputUsuario.replace(/(enter|imes|ai|ober|ufat)/g, function desencriptarTexto(texto) { //pasamos las cadenas a indentificar con la expresion regular
                                                    
        switch(texto) { 
            case 'enter':
                return 'e';
            case 'imes':
                return 'i';
            case 'ai':
                return 'a';
            case 'ober':
                return 'o';
            case 'ufat':
                return 'u';
            default:
                return texto; ///retornamos el texto
        }
    });
    
    document.getElementById('output-box').textContent = inputDesencriptado; ///pasamos el texto encriptado al output-box o caja de salida

}

///funcion para copiar

function copiarTexto(){

    var textoCopiado = document.getElementById('output-box').value; //con el .value accedemos directamente al valor del elemento, lo extraemos hasta aqui
    navigator.clipboard.writeText(textoCopiado); 

    vaciarOutput();
}

//funcion para vaciar el output

function vaciarOutput(){

    var output = document.getElementById('output-box');

    output.value = "";
}


