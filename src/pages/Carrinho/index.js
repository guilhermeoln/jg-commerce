import './carrinho.css';
import MyContext from '../../contexts/myContext';
import { useContext, useEffect } from 'react';
import api from '../../services/api';
import { Navigate, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMoneyBillAlt} from 'react-icons/fa';

export default function Carrinho() {

    const navigate = useNavigate();


    async function realizarCompra(){
        for(let i=0; i < productsCart.length; i++){
            const res = await api.put(`/Produtos/${productsCart[i].id}`, { quantidade: productsCart[i].quantidade - productsCart[i].quantidadeCompra});
            console.log(res.data)
        }
        setProductsCart([]);
        alert('Compra realizada com sucesso!');
        window.location.reload(true);
    }

    function toHome(){
        navigate('/');
    }

    const {
        loading,
        setLoading,
        productsCart,
        setProductsCart,
        produtos,
        setProdutos,
        addToCart
    } = useContext(MyContext)

    return (
        <div className="containerCarrinho">
            <div className='contentCarrinho'>
                <table key={productsCart.id}>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                    </tr>
                    {productsCart.map((produto) => (
                        <tr>
                            <td><img src={produto.imagem} /></td>
                            <td>{produto.nome}</td>
                            <td>{produto.quantidadeCompra}</td>
                            <td>R${produto.valor * produto.quantidadeCompra}</td>
                        </tr>
                    ))
                    }
                </table>
            </div>
            <div className='infoContentCarrinho'>
                <h3>Resumo do pedido</h3>
                <h4>Valor total:</h4>
                <button onClick={ realizarCompra }><FaMoneyBillAlt className='icon'/>Finalizar compra</button>
                <button onClick={ toHome }><FaArrowLeft className='icon'/>Continuar comprando</button>
            </div>
        </div>
    );
}