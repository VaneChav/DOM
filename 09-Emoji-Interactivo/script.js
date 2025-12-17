// Referencia del emoji del cursor 
const cursor = document.querySelector(".cursor"); 

// Detectamos el evento del movimiento del mouse 
document.addEventListener("mousemove" , (e) => {
  //console.log(e.clientX);
  //console.log(e.clientY);

  //Guardar los datos en una variable
  let mouseX = e.clientX - 24;
  let mouseY = e.clientY - 24;

  cursor.style.left = `${mouseX}px`; 
  cursor.style.top = `${mouseY}px`; 
})

// Detectar el evento de presionar una tecla 
document.addEventListener("keydown" , (e) => {
  // console.log(e.key);
  /* Usar switch para asignar el emoji al mouse */

  switch (e.key) {
    case "1": 
    cursor.textContent = "👽"; 
    document.body.style.backgroundColor = "#72afc1";
    break; 
    case "2": 
    cursor.textContent = "🐶"; 
    document.body.style.backgroundColor = "#DC9170";
    break; 
    case "3": 
    cursor.textContent = "🌸"; 
    document.body.style.backgroundColor = "#c469ac";
    break; 
    case "4": 
    cursor.textContent = "🎵"; 
    document.body.style.backgroundColor = "pink";
    break; 
    default: 
    cursor.textContent = "😺"; 
    document.body.style.backgroundColor = "darksalmon";
  }
})