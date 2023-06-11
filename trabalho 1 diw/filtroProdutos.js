function carregarProdutos(dados) {
  var conteudoprincipal = document.getElementById("principal");
  var htmlprodutos = "";

  for (let i = 0; i < dados.length; i++) {
    loja.push(dados[i])
  }

  if (loja.length == 0) {
    stringproducts = "<h1 class='text-center-mt-5'> Vazio </h1>"
    stringproducts += "<h1 class:'text-center'> Deseja adicionar? </h1>"
  }

  else {
    for (let i = 0; i < loja.length; i++) {
      var produtoatual = loja[i];
      var cardproduto =
        `<div class="col-10 col-sm-6 col-md-4 col-lg-4 col-xl-3 mt-5  ">
        <div class="card w-100" style="width: 18rem;">
        <img class="card-img-top" style="height: 300px;" src="${produtoatual.image}" alt="">
        <div class="card-body">
          <h5 class="card-title"><a href="detalhes.html?id=${produtoatual.id}">${produtoatual.title}</h5></a>
          <p class="card-text">$ ${produtoatual.price}</p>
          <p class="card-text"> ${produtoatual.category}</p>
          <a href="#" class="btn btn-primary">Adicionar ao carrinho</a>
        </div>
      </div>
      </div>`;

      htmlprodutos += cardproduto;
    }
  }
  conteudoprincipal.innerHTML += htmlprodutos;
}

function filtroinput(){
  var textoparafiltrar = document.getElementById("TextoFiltro").value;
  filtrar(textoparafiltrar);
  
}

function filtrar(texto){
var nomedoFiltro = document.getElementById("NomeFiltro");
var cards = document.getElementsByClassName("card");
var produtos;

for(let i = 0; i < cards.length; i++){
  produtos = cards[i];
  produtos.style.display="flex";


}

if (texto.length   > 0 ){

  nomedoFiltro.style.display="block";
  nomedoFiltro.textContent = "Busca por :"+texto;

  for(let i = 0; i < cards.length; i++){
    produtos = cards[i];
    var paragrafo = produtos.getElementsByClassName("category").item(0);
    var generos = paragrafo.textContent.toLocaleLowerCase();
  }

  if(!generos.includes(texto.toLocaleLowerCase())){
    produtos.style.display="none";
  }

}
else{
  nomedoFiltro.style.display="none";
}

}



 



function buscarserver() {
  fetch('https://fakestoreapi.com/products')
    .then(resposta => resposta.json())
    .then(dados => carregarProdutos(dados))
}

window.onload = buscarserver()