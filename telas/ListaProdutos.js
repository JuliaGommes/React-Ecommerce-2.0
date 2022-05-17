import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Produto } from '../componentes/Produto.js';
import { getProdutos } from '../servicos/ProdutosServico.js';
export function ProductsList ({navigation}) {
function renderProduto({item: produto}) {
    return (
      <Produto {...produto} 
      onPress={() => {
        navigation.navigate('DetalhesProduto', {
          produtotId: produto.id,
        });
      }}
      />
    );
  }

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    setProdutos(getProdutos());
  });

  return (
    <FlatList
      style={styles.listaProdutos}
      contentContainerStyle={styles.containerListaProduto}
      keyExtractor={(item) => item.id.toString()}
      data={produtos}
      renderItem={renderProduto}
    />
  );
}
const styles = StyleSheet.create({
    listaProdutos: {
    backgroundColor: '#eeeeee',
  },
  containerListaProduto: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});