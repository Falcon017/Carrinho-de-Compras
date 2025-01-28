let totalDaCompra;
limpar();

function adicionar(){
  //recuperar valores, nome do produto, quantidade e valor  
  let produto = document.getElementById('produto').value;
  let nomeDoProduto = produto.split('-')[0];
  let valorPorUnidade = produto.split('R$')[1];
  let quantidade = document.getElementById('quantidade').value;  
  //calcular o preço, o nosso subtotal
  let preço = quantidade * valorPorUnidade;
  //adicionar no carrinho
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">R$${preço}</span>
        </section>`;  
     totalDaCompra = totalDaCompra + preço;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalDaCompra}`;
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    totalDaCompra = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}

