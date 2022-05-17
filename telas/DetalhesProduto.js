import React, {useEffect, useState, useContext} from 'react';
import { Text, Image, View, ScrollView, SafeAreaView, Button, StyleSheet  } from 'react-native';
import { getProdutos } from '../servicos/ProdutosServico.js';
import { CarrinhoCompras } from '../CarrinhoCompras.js';
export function DetalhesProduto({rota}) {
  const { produtoId } = rota.parametros;
  const [produto, setProduto] = useState({});

  const { adicionaItemCarrinho } = useContext(CarrinhoCompras);

  useEffect(() => {
    setProduto(getProduto(produtoId));
  });

  function addAoCarrinho() {
    adicionaItemCarrinho(produto.id);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.imagem}
          source={produto.imagem}
        />
        <View style={styles.informacaoContainer}>
          <Text style={styles.nome}>{produto.nome}</Text>
          <Text style={styles.preco}>$ {produto.preco}</Text>
          <Text style={styles.descricao}>{produto.descricao}</Text>
            <Button
            onPress={addAoCarrinho}
            title="Adicionar ao carrinho de Compras"
            / >
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  cartao: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  imagem: {
    height: 300,
    width: '100%'
  },
  informacaoContainer: {
    padding: 16,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
});