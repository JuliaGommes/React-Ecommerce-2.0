import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
export function Product({nome, preco, imagem, onPress}) {
  return (
    <TouchableOpacity style={styles.cartao} onPress={onPress}>
      <Image
        style={styles.thumb}
        source={imagem}
      />
      <View style={styles.informacaoContainer}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.preco}>$ {preco}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  cartao: {
    backgroundColor: '#FFC0CB',
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
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
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
});