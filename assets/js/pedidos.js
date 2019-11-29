var mesa;
var pagina;

let seleciona = function(element){
	name = element.classList[0]
	window.localStorage.setItem('mesa', name[name.length - 1])
};


document.addEventListener('DOMContentLoaded', function() {

 	var mesa_atual= window.localStorage.getItem('mesa')
	console.log(mesa_atual)	

 	if (mesa_atual ==1) {
 		document.getElementsByClassName("mesa_1")[0].classList.add("ativo");
    }
 	if (mesa_atual ==2) {
 		document.getElementsByClassName("mesa_2")[0].classList.add("ativo");
    }
 	if (mesa_atual ==3) {
 		document.getElementsByClassName("mesa_3")[0].classList.add("ativo");
    }
 	if (mesa_atual ==4) {
 		document.getElementsByClassName("mesa_4")[0].classList.add("ativo");
    }
 	if (mesa_atual ==5) {
 		document.getElementsByClassName("mesa_5")[0].classList.add("ativo");
    }
 	if (mesa_atual ==6) {
 		document.getElementsByClassName("mesa_6")[0].classList.add("ativo");
    }
 	if (mesa_atual ==7) {
 		document.getElementsByClassName("mesa_7")[0].classList.add("ativo");
    }
 	if (mesa_atual ==8) {
 		document.getElementsByClassName("mesa_8")[0].classList.add("ativo");
    }

	window.localStorage.setItem('pagina', 'pedidos')
	// if (mesa !=1) {
	// 	document.getElementsByClassName("mesa_1")[0].classList.remove("ativo");
 //    }
})