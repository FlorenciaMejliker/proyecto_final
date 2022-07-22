//JS para el menú desplegable

const navegacion = document.querySelector("nav");
const botones = document.querySelectorAll(".abrir,.cerrar");

//esta funcion le va a agregar o sacar la clase "desplegado" a la navegacion depende lo que necesite. 
function toggleNavegacion(evento){
	evento.preventDefault();
	navegacion.classList.toggle("desplegado");
};
//por cada boton, dentro de la const botones, me genere una funcion que al hacer click se invoque la funcion de toggleNavegacion
botones.forEach(function(boton){
	boton.addEventListener("click",toggleNavegacion);
});

//JS para la modal

const miniaturas = document.querySelectorAll(".galeria a")
const modal = document.querySelector(".modal")
const imgModal = document.querySelector(".modal img")
const flechas = document.querySelectorAll(".modal a")
let imagenActual = 0; //esta variable define qué imagen estamos viendo en grande
let rutasImagenes = [];

/*le estoy pidiendo que por cada imagen, primero me vaya guardando al hacer click en la imagenes pequeñas*/
miniaturas.forEach(function(miniatura,indice){
	rutasImagenes.push(miniatura.getAttribute("href"));
	miniatura.addEventListener("click", function(evento){
		evento.preventDefault(); 
		imagenActual = indice
		imgModal.setAttribute("src", rutasImagenes[imagenActual]);
		modal.classList.add("visible");
	})
	
});
//bloque de codigo para que desaparezca la modal al hacer click en ella.
if(modal){
	modal.addEventListener("click", function(){
		modal.classList.remove("visible");
	});

/*bloque de codigo en el que hago que al apretar las flechas se vayan pasando las imagenes 
y nunca se termine de pasar, que no se corte en el primero y el ultimo*/
flechas.forEach(function(flecha,indice){
	flecha.addEventListener("click", function(evento){
		evento.preventDefault();
		evento.stopPropagation();
		
		if(indice == 0){
			imagenActual = imagenActual > 0 ? imagenActual - 1 : rutasImagenes.length - 1;
		}else{
			imagenActual = imagenActual < rutasImagenes.length - 1 ? imagenActual + 1 : 0;
		}
		imgModal.setAttribute("src",rutasImagenes[imagenActual]);
	});
})};