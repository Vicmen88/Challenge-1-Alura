"use strict";
/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.*/

//Declaracion de variables

const btnEnc = document.querySelector(".Encritpar");
const btndEnc = document.querySelector(".Desencriptar");
const btncopy = document.querySelector(".Copiar");
const textResultado = document.querySelector(".TextRes");

btnEnc.addEventListener("click", () => {
  let textoAencriptar = document.getElementById("textoaenc").value;
  document.getElementById("textoaenc").value = null;

  const chars = textoAencriptar.split("");
  console.log(textoAencriptar.split(""));
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] == "a") {
      chars[i] = "ai";
      console.log(chars[i]);
    } else if (chars[i] == "e") {
      chars[i] = "enter";
      console.log(chars[i]);
    } else if (chars[i] == "i") {
      chars[i] = "imes";
      console.log(chars[i]);
    } else if (chars[i] == "o") {
      chars[i] = "ober";
      console.log(chars[i]);
    } else if (chars[i] == "u") {
      chars[i] = "ufat";
      console.log(chars[i]);
    }
    console.log(chars);
    document.getElementById("Res").value = chars.join("");
    document.getElementById("btnCopy").textContent = "Copiar";
  }
});

btndEnc.addEventListener("click", () => {
  let textoAencriptar = document.getElementById("textoaenc").value;
  document.getElementById("textoaenc").value = null;

  const chars = textoAencriptar.split("");
  console.log(textoAencriptar.split(""));
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] == "a" && chars[i + 1] == "i") {
      chars[i] = "a";
      chars[i + 1] = null;
      console.log(chars[i]);
    } else if (
      chars[i] == "e" &&
      chars[i + 1] == "n" &&
      chars[i + 2] == "t" &&
      chars[i + 3] == "e" &&
      chars[i + 4] == "r"
    ) {
      chars[i] = "e";
      chars[i + 1] = null;
      chars[i + 2] = null;
      chars[i + 3] = null;
      chars[i + 4] = null;
      console.log(chars[i]);
    } else if (
      chars[i] == "i" &&
      chars[i + 1] == "m" &&
      chars[i + 2] == "e" &&
      chars[i + 3] == "s"
    ) {
      chars[i] = "i";
      chars[i + 1] = null;
      chars[i + 2] = null;
      chars[i + 3] = null;
      console.log(chars[i]);
    } else if (
      chars[i] == "o" &&
      chars[i + 1] == "b" &&
      chars[i + 2] == "e" &&
      chars[i + 3] == "r"
    ) {
      chars[i] = "o";
      chars[i + 1] = null;
      chars[i + 2] = null;
      chars[i + 3] = null;
      console.log(chars[i]);
    } else if (
      chars[i] == "u" &&
      chars[i + 1] == "f" &&
      chars[i + 2] == "a" &&
      chars[i + 3] == "t"
    ) {
      chars[i] = "u";
      chars[i + 1] = null;
      chars[i + 2] = null;
      chars[i + 3] = null;
      console.log(chars[i]);
    }
    console.log(chars);
    document.getElementById("Res").value = chars.join("");
    document.getElementById("btnCopy").textContent = "Copiar";
  }
});
btncopy.addEventListener("click", async () => {
  try {
    textResultado.select();
    await navigator.clipboard.writeText(textResultado.value);
    document.getElementById("btnCopy").textContent = "Copiado";
    document.getElementById("Res").value = null;
  } catch (error) {
    alert(error);
  }
});

//La letra "e" es convertida para "enter" funcion

//Desarrollo de lógica
//1.-El usuario debe capturar un texto y ese texto debe guardarse en la variable textoAencriptar--Listo
//2.-El usuario deberá dar click en el botón encriptar--Listo
//3.-El texto original desaparecerá del cuadro de captura y aparecerá en el cuadro de resultado-Listo
//4.-Antes de moverse a resultado, se harán las operaciones adecuadas siguiendo los requisitos del challenge y se guardara el resultado en la variable textoEncriptado.
//5.-Se podrá copiar el resultado y pegar  en el cuadro de ingresar texto, y después al botón encriptar(proceso inverso)

//Captura de texto y guardar en variable
