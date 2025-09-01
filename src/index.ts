//1: Crie uma interface chamada Produto
interface Produto {
    id: string;
    nome: string;
    preco: number;
    quantidadeEmEstoque: number;
    categoria?: string; 
  }
  
  //2: Criar o "Banco de Dados em Memória"
  const inventario: Produto[] = [
    { id: "PROD001", nome: "GalaxyBuds", preco: 800.00, quantidadeEmEstoque: 50, categoria: "Eletrônicos" },
    { id: "PROD002", nome: "Iphone 15", preco: 4200.00, quantidadeEmEstoque: 30, categoria: "Eletrônicos" },
    { id: "PROD003", nome: "Lasanha", preco: 25.50, quantidadeEmEstoque: 100, categoria: "Alimentos" }
  ];
  
  //3: Implementar Funções de Gerenciamento do Inventário
  
  function adicionarProduto(novoProduto: Produto): void {
    const produtoExistente = inventario.find(produto => produto.id === novoProduto.id);
    if (produtoExistente) {
      console.log(`Erro: Produto com o ID "${novoProduto.id}" já existe.`);
    } else {
      inventario.push(novoProduto);
      console.log(`Sucesso: Produto "${novoProduto.nome}" adicionado.`);
    }
  }
  
  function listarProdutos(): void {
    console.log("\n--- Produtos no Inventário ---");
    if (inventario.length === 0) {
      console.log("O inventário está vazio.");
    } else {
      inventario.forEach(produto => {
        console.log(
          `ID: ${produto.id}, Nome: ${produto.nome}, Preço: R$${produto.preco.toFixed(2)}, Estoque: ${produto.quantidadeEmEstoque}` +
          `${produto.categoria ? `, Categoria: ${produto.categoria}` : ''}`
        );
      });
    }
    console.log("----------------------------");
  }
  
  function buscarProdutoPorId(id: string): Produto | undefined {
    return inventario.find(produto => produto.id === id);
  }
  
  function atualizarEstoque(id: string, novaQuantidade: number): boolean {
    const produto = buscarProdutoPorId(id);
    if (produto) {
      if (novaQuantidade >= 0) {
        produto.quantidadeEmEstoque = novaQuantidade;
        console.log(`Sucesso: Estoque do produto "${produto.nome}" (ID: ${id}) atualizado para ${novaQuantidade}.`);
        return true;
      } else {
        console.log(`Erro: A nova quantidade (${novaQuantidade}) para o produto ID "${id}" não pode ser negativa.`);
        return false;
      }
    } else {
      console.log(`Erro: Produto com o ID "${id}" não encontrado no inventário.`);
      return false;
    }
  }
  
  //4: Testar o Sistema de Inventário
  console.log("--- Iniciando Testes do Sistema de Inventário ---");
  
  listarProdutos();
  
  const novoProduto1: Produto = {
    id: "PROD004",
    nome: "Fone de Ouvido Bluetooth",
    preco: 199.90,
    quantidadeEmEstoque: 50,
    categoria: "Acessórios"
  };
  adicionarProduto(novoProduto1);
  
  const novoProdutoDuplicado: Produto = {
    id: "PROD001",
    nome: "Tablet Pro",
    preco: 1200.00,
    quantidadeEmEstoque: 5
  };
  adicionarProduto(novoProdutoDuplicado);
  
  listarProdutos();
  
  const produtoEncontrado = buscarProdutoPorId("PROD002");
  if (produtoEncontrado) {
    console.log("\n--- Detalhes do Produto Encontrado (ID: PROD002) ---");
    console.log(`ID: ${produtoEncontrado.id}, Nome: ${produtoEncontrado.nome}, Preço: R$${produtoEncontrado.preco.toFixed(2)}, Estoque: ${produtoEncontrado.quantidadeEmEstoque}`);
  }
  
  const produtoNaoEncontrado = buscarProdutoPorId("PROD999");
  if (!produtoNaoEncontrado) {
    console.log("\n--- Busca de Produto Inexistente (ID: PROD999) ---");
    console.log("Produto com o ID 'PROD999' não foi encontrado.");
  }
  
  atualizarEstoque("PROD001", 8);
  
  atualizarEstoque("PROD999", 15);
  
  listarProdutos();
  
  console.log("--- Testes do Sistema de Inventário Finalizados ---");
  