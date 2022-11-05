import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import RoutesApp from "./routes";
import MyContext from './contexts/myContext';

function App() {

  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productsCart, setProductsCart] = useState([]);
  const [countCart, setCountCart] = useState(0);
  const [quantidadeCompraProduto, setQuantidadeCompraProduto] = useState(0);
  const [modoCliente, setModoCliente] = useState(true);



  function addToCart(idProduto, nomeProduto, quantidadeProduto, categoriaProduto, valorProduto, imgProduto, quantidadeCompraProduto){
    let searchItem = productsCart.find(produto => produto.id === idProduto);

    if(searchItem){
        toast.warn("Este item já está no carrinho!")
        return;
    } else if(productsCart.length > 2){
      toast.warn('Só é possível adicionar até 3 itens no carrinho!')
      return;
    } else{
        productsCart.push({
          id: idProduto,
          nome: nomeProduto,
          imagem: imgProduto,
          quantidade: quantidadeProduto,
          quantidadeCompra: quantidadeCompraProduto,
          categoria: categoriaProduto,
          valor: valorProduto
        });
        setCountCart(productsCart.length)
        toast.success(`${nomeProduto} adicionado no carrinho!`)
    }    
  }

  return (
    <div>
      <MyContext.Provider value={
        {loading,
        setLoading,
        productsCart,
        setProductsCart,
        produtos,
        setProdutos,
        addToCart,
        modoCliente,
        setModoCliente
      }}>
      <ToastContainer autoClose={3000} />
      <RoutesApp />
      </MyContext.Provider>
    </div>
  );
}

export default App;
