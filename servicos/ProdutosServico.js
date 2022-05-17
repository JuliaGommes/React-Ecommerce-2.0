const PRODUTOS = [
    {
        id: 100,
        nome: 'Vestido',
        preco: 350,
        imagem: require('../assets/products/vestidoazul-100.jpg'),
        descricao: 'Vestido Azul simples.'
    },
    {
        id: 101,
        nome: 'Sobretudo',
        preco: 250,
        imagem: require('../assets/products/sobretudo-101.jpg'),
        descricao: 'Sobretudo Preto com Bolsos'
    },
    {
        id: 102,
        nome: 'Conjunto',
        preco: 2,
        imagem: require('../assets/products/conjunto-102.jpg'),
        descricao: 'Conjunto de Vestido Xadrez e Camisa Bramca'
    }
];
export function getProdutos() {
    return PRODUTOS;
}
export function getProdutos(id) {
    return PRODUTOS.find((produto) => (produto.id == id));
}