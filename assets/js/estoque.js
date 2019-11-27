// (https://www.w3schools.com/js/js_json_parse.asp) A common use of JSON is to exchange data to/from a web server.
// When receiving data from a web server, the data is always a string.
// Parse the data with JSON.parse(), and the data becomes a JavaScript object.
var lista_produto = [];
function add_produto(nomeproduto,quantidadeproduto){
    let NovoProduto = {nome:produto,quantidade:quantidadeproduto};
    let prod = localStorage.getItem("produtos");
    if (lista_produto==null){
        alert("Não há nenhum produto")
    }
    else prod = JSON.parse(lista_produto);{
        produtos.push(NovoProduto);
        localStorage.setItem("produtos",JSON.stringify(produtos));
        alert("Foi adicionado mais um produto:"+NovoProduto+"quantidade:"+quantidade);
        atualizar_valor("Estoque");
        location.reload()
    }
}
function atualizar_valor(lista_produto) {
    localStorage.setItem("Estoque",++document.getElementById(idCampo).innerHTML);
}
function lista_dos_produtos() {

    let produtos = localStorage.getItem("produtos");
    document.write("<h1>Estoque:</h1>");
    prod = JSON.parse(produtos);
    produtos = prod;
    document.write("<ul>");
    document.write("<li>Nome do produto: "+produto.nome+"</li>");
    document.write("<li>Quantidade no estoque: "+produto.quantidade+"</li>");
    document.write("</ul>");
        
} 

