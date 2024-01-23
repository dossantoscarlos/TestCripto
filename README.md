# Leia-me

## Arquivo Html

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <title>Text Decoder</title>
  </head>
  <body>
    <h1>Text Decoder</h1>
    <textarea id="inputText" placeholder="Enter encrypted text"></textarea>
    <button id="decodeButton">Decode</button>
    <!--Adicionei o btn encodeButton que faltava -->
    <button id="encodeButton">Encode</button>

    <textarea id="outputText" readonly></textarea>
    
    <footer>
      <p>Created by Your Sabrina</p>
    </footer>
    <!-- Inclua a biblioteca CryptoJS diretamente no seu HTML -->
    <script src="crypto-js.js"></script>
    <script src="script.js"></script>
  </body>
</html>
```

## Arquivo js

```js
const inputText = document.getElementById("inputText");
const encodeButton = document.getElementById("encodeButton");
const constText = document.getElementById("outputText");
const decodeButton = document.getElementById("decodeButton");

//alterado de clique para click ( click e o envento que dispara um click no objeto)  
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
 * criei a funcao decodeText
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

decodeButton.addEventListener("click", decodeText, false);
encodeButton.addEventListener("click", encodeText, false); 

// console.log('cripto', encryptWithAES("joao",134));
```
