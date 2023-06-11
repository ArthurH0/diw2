function DetalhesDoProduto(IdProduto){
    let IdRequisicao = 'https://fakestoreapi.com/products?id='+IdProduto;
    fetch(IdRequisicao)
    .then(resposta => resposta.json())
    .then(dados => Carregar(dados))
    
}

function Carregar(produtoatual){
    var ConteudoPrincipal = document.getElementById("principal");
    htmlProdutos = "";

    let IdDetalhes = new URLSearchParams(window.location.search);
    let identificador = IdDetalhes.get("id");
    let Posicao1 = parseInt(identificador);
    let posicao = Posicao1 -1;

    var CardDetalhes=`
    <div class="col-8 d-flex">
    <img class="card-img-top w-50 mx-auto justify-content-center" ;" src="${produtoatual[posicao].image}" alt="">
    </div>

    <div class="col-8 d-flex">
        <div class="card w-100" style="width: 18rem;">
        
        <div class="card-body">
          <h5 class="card-title"><a href="detalhes.html?id=${produtoatual[posicao].id}">${produtoatual[posicao].title}</h5></a>
          <p class="card-text">${produtoatual[posicao].description} </p>
          <p class="card-text">$ ${produtoatual[posicao].price}</p>
          <a href="#" class="btn btn-primary justify-content-center">Adicionar ao carrinho</a>
        </div>
      </div>
      </div>`;


    htmlProdutos += CardDetalhes;

    ConteudoPrincipal.innerHTML += htmlProdutos;

}

window.onload = () =>{
 let IdDetalhes = new URLSearchParams(window.location.search);
 let identificador = IdDetalhes.get("id");
DetalhesDoProduto(identificador);

}