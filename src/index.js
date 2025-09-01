"use strict";
//1: Crie uma interface chamada Produto
//2: Criar o "Banco de Dados em Memória"
var inventario = [
    { id: "PROD001", nome: "GalaxyBuds", preco: 800.00, quantidadeEmEstoque: 50, categoria: "Eletrônicos" },
    { id: "PROD002", nome: "Iphone 15", preco: 4200.00, quantidadeEmEstoque: 30, categoria: "Eletrônicos" },
    { id: "PROD003", nome: "Lasanha", preco: 25.50, quantidadeEmEstoque: 100, categoria: "Alimentos" }
];
//3: Implementar Funções de Gerenciamento do Inventário
function adicionarProduto(novoProduto) {
    var produtoExistente = inventario.find(function (produto) { return produto.id === novoProduto.id; });
    if (produtoExistente) {
        console.log("Erro: Produto com o ID \"".concat(novoProduto.id, "\" j\u00E1 existe."));
    }
    else {
        inventario.push(novoProduto);
        console.log("Sucesso: Produto \"".concat(novoProduto.nome, "\" adicionado."));
    }
}
function listarProdutos() {
    console.log("\n--- Produtos no Inventário ---");
    if (inventario.length === 0) {
        console.log("O inventário está vazio.");
    }
    else {
        inventario.forEach(function (produto) {
            console.log("ID: ".concat(produto.id, ", Nome: ").concat(produto.nome, ", Pre\u00E7o: R$").concat(produto.preco.toFixed(2), ", Estoque: ").concat(produto.quantidadeEmEstoque).concat(produto.categoria ? ", Categoria: ".concat(produto.categoria) : ""));
        });
    }
    console.log("----------------------------");
}
function buscarProdutoPorId(id) {
    return inventario.find(function (produto) { return produto.id === id; });
}
function atualizarEstoque(id, novaQuantidade) {
    var produto = buscarProdutoPorId(id);
    if (produto) {
        if (novaQuantidade >= 0) {
            produto.quantidadeEmEstoque = novaQuantidade;
            console.log("Sucesso: Estoque do produto \"".concat(produto.nome, "\" (ID: ").concat(id, ") atualizado para ").concat(novaQuantidade, "."));
            return true;
        }
        else {
            console.log("Erro: A nova quantidade (".concat(novaQuantidade, ") para o produto ID \"").concat(id, "\" n\u00E3o pode ser negativa."));
            return false;
        }
    }
    else {
        console.log("Erro: Produto com o ID \"".concat(id, "\" n\u00E3o encontrado no invent\u00E1rio."));
        return false;
    }
}
//4: Testar o Sistema de Inventário
console.log("--- Iniciando Testes do Sistema de Inventário ---");
listarProdutos();
var novoProduto1 = {
    id: "PROD004",
    nome: "Fone de Ouvido Bluetooth",
    preco: 199.90,
    quantidadeEmEstoque: 50,
    categoria: "Acessórios"
};
adicionarProduto(novoProduto1);
var novoProdutoDuplicado = {
    id: "PROD001",
    nome: "Tablet Pro",
    preco: 1200.00,
    quantidadeEmEstoque: 5
};
adicionarProduto(novoProdutoDuplicado);
listarProdutos();
var produtoEncontrado = buscarProdutoPorId("PROD002");
if (produtoEncontrado) {
    console.log("\n--- Detalhes do Produto Encontrado (ID: PROD002) ---");
    console.log("ID: ".concat(produtoEncontrado.id, ", Nome: ").concat(produtoEncontrado.nome, ", Pre\u00E7o: R$").concat(produtoEncontrado.preco.toFixed(2), ", Estoque: ").concat(produtoEncontrado.quantidadeEmEstoque));
}
var produtoNaoEncontrado = buscarProdutoPorId("PROD999");
if (!produtoNaoEncontrado) {
    console.log("\n--- Busca de Produto Inexistente (ID: PROD999) ---");
    console.log("Produto com o ID 'PROD999' não foi encontrado.");
}
atualizarEstoque("PROD001", 8);
atualizarEstoque("PROD999", 15);
listarProdutos();
console.log("--- Testes do Sistema de Inventário Finalizados ---");
