/* 

Nodo de Documento

Este nodo representa el documento completo de HTML. Incluye el contenido raiz > root  hasta los elementos hijos.

Para acceder a este nodo usamos ➡ document

*/

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL); 

/* 

Nodos Elemento

Podemos seleccionar nodos de los elementos del HTML 

document.getElementByTagName("element");

*/
let title = document.getElementsByTagName("h1");

console.log(title);
console.log(title[0].id);
console.log(title[0].clasName);

/* 

Nodos de Atributo

Son los nodos que accedemos a través de su clase o de su id.

  document.getElementById("id");
  document.getElementByClassName("clase");

Van a traer a la primera coincidencia.

*/

let parrafo = document.getElementById("puchunguito");

console.log(parrafo);
console.log(parrafo.innerText);

let bullet = document.getElementsByClassName("bullet");

console.log(bullet);

for(i = 0; i < bullet.length; i++) {
  console.log(bullet [i].innerText);
}

