function CriarCartao(categoria, pergunta, resposta) {

    let conteiner = document.getElementById('conteiner')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
        <div class="cartao__conteudo">
        <h3>${categoria}</h3>
        <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
        </div>
        
        <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
        </div>
        </div>

let respostaEstaVisivel = false 
function viraCartao() {
    respostaEstaVisivel = !respostaEstaVisivel
    cartao.classList.toggle('active', resposta)
  }
  cartao.addEventListener('click', viraCartao)

  conteiner.appendChild(cartao)



}