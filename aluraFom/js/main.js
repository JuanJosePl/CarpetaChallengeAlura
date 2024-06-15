

const listaDeTeclas = document.querySelectorAll("input[type=button]");

const inputTel = document.querySelector("input[type=tel]");

for (let indice = 0; indice < listaDeTeclas.length; indice++) {
  const tecla = listaDeTeclas[indice];

  tecla.onclick = function () {
    inputTel.value = inputTel.value + tecla.value;
  };
}

/*Lo que aprendimos en esta aula:

Repetición optimizada con for:

Cómo es la estructura de repetición for y cómo puede ayudarnos a tener un código más limpio, además de la forma de incrementar el valor de una variable con el
 operador ++. También hemos conocido el atributolength que se encuentra en las listas y que nos ayuda a obtener dinámicamente el valor del tamaño de una lista.
Eventos en el teclado:

Qué son los eventos del teclado y cómo usarlos: onkeydown y onkeyup. Cómo agregar y eliminar clases en un elemento HTML a través de JavaScript, 
con las funciones add y remove de classList.
Condiciones en el código y operadores lógicos:

Qué es el objeto evento, cómo declararlo y acceder a él a través del parámetro de una función vinculada a un evento. La estructura condicional if y para qué sirve, a
demás de conocer el operador de igualdad ==, igualdad estricta === y el operador or (||).*/