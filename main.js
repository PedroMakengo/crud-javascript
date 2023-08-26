const produtos = [
  {
    nome: 'Teclado',
    valor: 250,
    estoque: 20,
  },
  {
    nome: 'Mouse',
    valor: 150,
    estoque: 20,
  },
]

const clientes = [
  { nome: 'Antonia', saldo: 1500, produtos: [] },
  { nome: 'Pedro', saldo: 400, produtos: [] },
]

// Create new product
const createProduct = (nome, valor, estoque) => {
  const data = {
    nome,
    valor,
    estoque,
  }
  produtos.push(data)
}

// Retorn product
const getProduct = () => {
  console.log(produtos)
  return produtos
}

const updateProduct = (nome, novoValor, novoEstoque) => {
  const index = produtos.findIndex((item) => item.nome === nome)

  if (novoValor) produtos[index].valor = novoValor
  if (novoEstoque) produtos[index].estoque = novoEstoque
}

const deleteProduct = (nome) => {
  const index = produtos.findIndex((item) => item.nome === nome)

  produtos.splice(index, 1)
}

// COMPRAR PRODUTOS
const comprarProduto = (nomeProduto, cliente, quantidade) => {
  const indexProduto = produtos.findIndex((item) => item.nome === nomeProduto)
  const indexCliente = clientes.findIndex((item) => item.nome === cliente)
  const valorCompra = produtos[indexProduto].valor * quantidade

  if (clientes[indexCliente].saldo >= valorCompra) {
    clientes[indexCliente].saldo = clientes[indexCliente].saldo - valorCompra
    produtos[indexProduto].estoque = produtos[indexProduto].estoque - quantidade

    for (let i = 1; i <= quantidade; i++) {
      clientes[indexCliente].produtos.push(nomeProduto)
    }
  } else {
    console.log('Saldo insuficiente!')
  }
}

// createProduct('Pedro', 500, 20)
// updateProduct('Teclado', null, 5)

comprarProduto('Teclado', 'Antonia', 2)
getProduct()
