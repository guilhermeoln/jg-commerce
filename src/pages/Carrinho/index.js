import './carrinho.css';
import MyContext from '../../contexts/myContext';
import { useContext } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMoneyBillAlt } from 'react-icons/fa';

export default function Carrinho() {

    const navigate = useNavigate();


    async function realizarCompra() {
        for (let i = 0; i < productsCart.length; i++) {
            const res = await api.put(`/Produtos/${productsCart[i].id}`, { quantidade: productsCart[i].quantidade - productsCart[i].quantidadeCompra });
            console.log(res.data)
        }
        setProductsCart([]);
        alert('Compra realizada com sucesso!');
        window.location.reload(true);
    }

    function toHome() {
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
            {productsCart.length > 0
                ?
                <>
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
                <h4>Valor total: </h4>
                <button onClick={ realizarCompra }><FaMoneyBillAlt className='icon'/>Finalizar compra</button>
                <button onClick={ toHome }><FaArrowLeft className='icon'/>Continuar comprando</button>
            </div>
            </>
                :
                <>
                    <img src="http://2.bp.blogspot.com/-9nBg_pZYyzY/UH7f1qzoN4I/AAAAAAAAAGk/6k2ZXsJ12xc/s1600/carrinho.png" alt="carrinho" />
                    <span className="textCarrinhoVazio">O carrinho está vazio!</span>
                    <button className='btnCarrinhoVazio' onClick={ toHome }>Comprar agora</button>
                </>
            }
        </div>
    );
}