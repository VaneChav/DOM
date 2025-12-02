/*

Obtener un elemento de referencia. Este será el nodo de HTML donde vamos a crear el nuevo elemento.

*/

const peliculas = document.getElementById("peliculas");

/* 

Para crear un nuevo elemento usamos createElement()

Sintaxis:

  document.createElement("tipoElemento");

*/

const nuevaPeli = document.createElement("li");

console.log(nuevaPeli);

/* 

Para agregar el elemento al DOM, tomamos el elemento de referencia y usamos el método appendi()

Sintaxis;

  elementoReferencia.append(nuevoElemento);

*/

peliculas.append(nuevaPeli);

/* 

Para agregarle contenido al nuevo elemento podemos usar innerTex

*/

nuevaPeli.innerText = "Terminator";
console.log(peliculas)

/* Agregar las clases; peliculas y fondo-dos al nuevo elemento */

nuevaPeli.classList.add("pelicula", "fondo-dos");