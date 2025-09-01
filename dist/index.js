"use strict";
// --- Passo 2: Criar o "Banco de Dados em Memória" ---
const inventario = [
    { id: "PROD001", nome: "Laptop Gamer", preco: 7500.00, quantidadeEmEstoque: 10, categoria: "Eletrônicos" },
    { id: "PROD002", nome: "Smartphone X", preco: 3200.00, quantidadeEmEstoque: 25, categoria: "Eletrônicos" },
    { id: "PROD003", nome: "Café Especial 500g", preco: 25.50, quantidadeEmEstoque: 100, categoria: "Alimentos" }
];
// --- Passo 3: Implementar Funções de Gerenciamento do Inventário ---
/**
 * Adiciona um novo produto ao inventário.
 * @param novoProduto O objeto Produto a ser adicionado.
 */
function adicionarProduto(novoProduto) {
    const produtoExistente = inventario.find(produto => produto.id === novoProduto.id);
    if (produtoExistente) {
        console.log(Erro, Produto, com, o, ID, "${novoProduto.id}", já, existe, no, inventário.);
    }
    else {
        inventario.push(novoProduto);
        console.log(Sucesso, Produto, "${novoProduto.nome}", adicionado, ao, inventário.);
    }
}
/**
 * Lista todos os produtos no inventário.
 */
function listarProdutos() {
    console.log("\n--- Produtos no Inventário ---");
    if (inventario.length === 0) {
        console.log("O inventário está vazio.");
    }
    else {
        inventario.forEach(produto => {
            console.log(ID, $, { produto, : .id }, Nome, $, { produto, : .nome }, Preço, R$$, { produto, : .preco.toFixed(2) }, +Estoque, $, { produto, : .quantidadeEmEstoque }, $, { produto, : .categoria ?  : , Categoria: $ }, { produto, : .categoria }, '');
        });
    }
    ;
}
console.log("----------------------------");
/**
 * Busca um produto no inventário pelo seu ID.
 * @param id O ID do produto a ser buscado.
 * @returns O objeto Produto encontrado, ou undefined se não for encontrado.
 */
function buscarProdutoPorId(id) {
    return inventario.find(produto => produto.id === id);
}
/**
 * Atualiza a quantidade em estoque de um produto existente.
 * @param id O ID do produto a ser atualizado.
 * @param novaQuantidade A nova quantidade em estoque.
 * @returns true se a atualização foi bem-sucedida, false caso contrário.
 */
function atualizarEstoque(id, novaQuantidade) {
    const produto = buscarProdutoPorId(id);
    if (produto) {
        if (novaQuantidade >= 0) {
            produto.quantidadeEmEstoque = novaQuantidade;
            console.log(Sucesso, Estoque);
            do
                produto;
            while ("${produto.nome}"(ID, $, { id }));
            atualizado;
            para;
            $;
            {
                novaQuantidade;
            }
            ;
            return true;
        }
        else {
            console.log(Erro, A, nova, quantidade($, { novaQuantidade }), para, o, produto, ID, "${id}", não, pode, ser, negativa.);
            return false;
        }
    }
    else {
        console.log(Erro, Produto, com, o, ID, "${id}", não, encontrado, no, inventário.);
        return false;
    }
}
// --- Passo 4: Testar o Sistema de Inventário ---
console.log("--- Iniciando Testes do Sistema de Inventário ---");
// 1. Liste todos os produtos inicialmente.
listarProdutos();
// 2. Adicione um novo produto.
const novoProduto1 = {
    id: "PROD004",
    nome: "Fone de Ouvido Bluetooth",
    preco: 199.90,
    quantidadeEmEstoque: 50,
    categoria: "Acessórios"
};
adicionarProduto(novoProduto1);
// 3. Tente adicionar um produto com um id que já existe.
const novoProdutoDuplicado = {
    id: "PROD001",
    nome: "Tablet Pro",
    preco: 1200.00,
    quantidadeEmEstoque: 5
};
adicionarProduto(novoProdutoDuplicado);
// 4. Liste os produtos novamente para ver o produto adicionado.
listarProdutos();
// 5. Busque um produto existente pelo id e exiba seus detalhes.
const produtoEncontrado = buscarProdutoPorId("PROD002");
if (produtoEncontrado) {
    console.log("\n--- Detalhes do Produto Encontrado (ID: PROD002) ---");
    console.log(ID, $, { produtoEncontrado, : .id }, Nome, $, { produtoEncontrado, : .nome }, Preço, R$$, { produtoEncontrado, : .preco.toFixed(2) }, Estoque, $, { produtoEncontrado, : .quantidadeEmEstoque });
}
// 6. Busque um produto que não existe pelo id e mostre a mensagem apropriada.
const produtoNaoEncontrado = buscarProdutoPorId("PROD999");
if (!produtoNaoEncontrado) {
    console.log("\n--- Busca de Produto Inexistente (ID: PROD999) ---");
    console.log("Produto com o ID 'PROD999' não foi encontrado.");
}
// 7. Atualize a quantidade em estoque de um produto existente.
atualizarEstoque("PROD001", 8);
// 8. Tente atualizar a quantidade em estoque de um produto que não existe.
atualizarEstoque("PROD999", 15);
// 9. Liste os produtos pela última vez para ver as atualizações.
listarProdutos();
console.log("--- Testes do Sistema de Inventário Finalizados ---");
