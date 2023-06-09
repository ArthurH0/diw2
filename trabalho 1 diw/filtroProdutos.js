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
        `<div class="col-10 col-sm-6 col-md-6 col-lg-3 mt-5  ">
        <div class="card w-100" style="width: 18rem;">
        <a href="detalhes.html" onclick="mostrarDetalhes()"><img class="card-img-top" style="height: 300px;" src="${produtoatual.image}" alt=""></a>
        <div class="card-body">
          <h5 class="card-title">${produtoatual.title}</h5>
          <p class="card-text">$ ${produtoatual.price}</p>
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

  var textoparafiltrar = document.getElementById("textinput").value;
  filtrar(textoparafiltrar);
}

function filtrar(texto){
var nomedoFiltro = getElementById("produtosfiltro");

}

function mostrarDetalhes(){

  var detalhesProduto = document.getElementById("principalDetalhes");
  var detalhes = "";

  for (let i = 0; i <= 1; i++) {
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
        `<div class="col-10 col-sm-6 col-md-6 col-lg-3 mt-5  ">
        <div class="card w-100" style="width: 18rem;">
        <a href="detalhes.html" onclick="mostrarDetalhes()"><img class="card-img-top" style="height: 300px;" src="${produtoatual.image}" alt=""></a>
        <div class="card-body">
          <h5 class="card-title">${produtoatual.title}</h5>
          <p class="card-text">$ ${produtoatual.price}</p>
          <a href="#" class="btn btn-primary">Adicionar ao carrinho</a>
        </div>
      </div>
      </div>`;

      htmlprodutos += cardproduto;
    }
  }
  conteudoprincipal.innerHTML += htmlprodutos;
}

 



function buscarserver() {
  fetch('https://fakestoreapi.com/products')
    .then(resposta => resposta.json())
    .then(dados => carregarProdutos(dados))
}

window.onload = buscarserver()