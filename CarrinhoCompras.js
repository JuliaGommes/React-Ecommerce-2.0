import React, {createContext, useState} from 'react';
import { getProdutos } from './servicos/ProdutosServico.js';
export const CarrinhoCompras = createContext();
export function ProvedorCarrinho(props) {
  const [items, setItems] = useState([]);

  function adicionaItemCarrinho(id) {
    const product = getProdutos(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if(!item) {
          return [...prevItems, {
              id,
              qtd: 1,
              produto,
              precoTotal: produto.preco
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qtd++;
              item.totalPrice += produto.preco;
            }
            return item;
          });
      }
    });
}
function getContagemItem() {
      return items.reduce((soma, item) => (soma + item.qtd), 0);
  }

  function getPrecoTotal() {
      return items.reduce((soma, item) => (soma + item.precoTotal), 0);
  }  

  return (
    <CarrinhoCompras.Provider 
      value={{items, setItems, getContagemItem, adicionaItemCarrinho, getPrecoTotal}}>
      {props.children}
    </CarrinhoCompras.Provider>
  );
}