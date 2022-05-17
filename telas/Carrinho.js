import React, { useEffect, useState, useContext } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { CarrinhoCompras } from "../CarrinhoCompras";
export function Carrinho({ navigation }) {
  const { items, getItemsCount, getPrecoTotal } = useContext(CarrinhoCompras);

  function Totais() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getPrecoTotal());
    });
    return (
      <View style={styles.cartLineTotal}>
        <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
        <Text style={styles.lineRight}>$ {total}</Text>
      </View>
    );
  }
  function renderItem({ item }) {
    return (
      <View style={styles.cartLine}>
        <Text style={styles.lineLeft}>
          {item.nome.produto} x {item.qtd}
        </Text>
        <Text style={styles.lineRight}>$ {item.precoTotal}</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.produto.id.toString()}
      ListFooterComponent={Totais}
    />
  );
}
const styles = StyleSheet.create({
  cartLine: {
    flexDirection: "row",
  },
  cartLineTotal: {
    flexDirection: "row",
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
  },
  lineTotal: {
    fontWeight: "bold",
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: "#333333",
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#333333",
    textAlign: "right",
  },
  itemsList: {
    backgroundColor: "#eeeeee",
  },
  itemsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
