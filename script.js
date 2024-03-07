//alert("Hola este es mi Javascript")

//let nombre="Damián";
//console.log(nombre);

//let nombre = "Juan";
//let ciudad = "Buenos Aires";
//let gusto = "chocolate";

//let parrafo = document.querySelector(".parrafo2");

//function cambiarTexto(nombre, ciudad, gusto) {
//  let contenido = `Me llamo ${nombre}, nací en ${ciudad} y me gusta el ${gusto} y salir a pasear en días soleados. Me gustaría aprender programación para poder ayudar a las personas a mostrar lo que hacen.`;

//return contenido;
//}

//parrafo.innerHTML = cambiarTexto(nombre,ciudad,gusto);

let menuResponsive= document.querySelector(".checkbtn");
    menuResponsive.onclick = function () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
  };
