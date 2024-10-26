function CriarCartao(categoria, pergunta, resposta) {

    let conteiner = document.getElementById('conteiner')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = '
        <div class="cartao_conteudo">
          <h3>${categoria}</h3>
        <div class="cartao_conteudo_pergunta">
              <p>${pergunta}</p>
       </div>
       </div> 
'

let respostaEstaVisivel = false 
function viraCartao() {
    respostaEstaVisivel = !respostaEstaVisivel
    cartao.classList.toggle('active', resposta)
  }
  cartao.addEventListener('click', viraCartao)

  conteiner.appendChild(cartao)



}