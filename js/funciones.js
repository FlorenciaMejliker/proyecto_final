//JS para el menú desplegable

const navegacion = document.querySelector("nav");
const botones = document.querySelectorAll(".abrir,.cerrar");


function toggleNavegacion(evento){
	evento.preventDefault();
	navegacion.classList.toggle("desplegado");
};

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

miniaturas.forEach(function(miniatura,indice){
	rutasImagenes.push(miniatura.getAttribute("href"));
	miniatura.addEventListener("click", function(evento){
		evento.preventDefault(); //lo pongo dentro del addEvenLÑistener
		imagenActual = indice
		imgModal.setAttribute("src", rutasImagenes[imagenActual]);
		modal.classList.add("visible");
	})
	
});

modal.addEventListener("click", function(){
		modal.classList.remove("visible");
	});
	
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
	})
})