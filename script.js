const inputText = document.getElementById("inputText");
const encodeButton = document.getElementById("encodeButton");
const constText = document.getElementById("outputText");
const decodeButton = document.getElementById("decodeButton");

const decodeText = () => {
    const resultado = decodeWithAES(inputText.value,"123");
    constText.innerText = resultado
};

/**
 * Codifica a mensagem
 * Eu pego o inputText.value para ter acesso ao valor do input   
*/
const encodeText = () => {
    const resultado = encryptWithAES(inputText.value, "123");
    constText.innerText = resultado
};

/**
 * criei a funcao decodeWithAES
*/
function decodeWithAES (texto, senha) {
    return CryptoJS.AES.decrypt(texto,senha);
};

/***
 * funcao que criptografa o texto
 */
function encryptWithAES (texto, senha) {
    return CryptoJS.AES.encrypt(texto, senha);
}

/**
 * Alterado de clique para click 
 * ( click e o envento que dispara um click no objeto) 
 * e passo false para evitar propagacao
 */ 
decodeButton.addEventListener("click", decodeText, false);
encodeButton.addEventListener("click", encodeText, false); 
