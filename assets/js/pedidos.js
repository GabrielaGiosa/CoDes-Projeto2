var mesa;
var pagina;
var mesa atual;

let seleciona = function(element){
	name = element.classList[0]
	window.localStorage.setItem('mesa', name[name.length - 1])
};


document.addEventListener('DOMContentLoaded', function() {
	window.localStorage.getItem('pagina')
	
	window.localStorage.setItem('pagina', 'pedidos')
})