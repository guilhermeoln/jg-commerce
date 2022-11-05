import './cardProducts.css';
import MyContext from '../../contexts/myContext';
import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function CardProducts(props) {

    const { id, imagem, categoria, nome, valor, quantidade } = props.produto;


    const {
        loading,
        setLoading,
        productsCart,
        setProductsCart,
        produtos,
        setProdutos,
        addToCart,
        modoCliente,
        setModoCliente
    } = useContext(MyContext)


    return (
        <li key={id}>
            <div className='imgListaProduto'>
                <img src={imagem} />
            </div>
            <div className='contentListaProduto'>
                <div className='textListaProduto'>
                    <p>{categoria}</p>
                    <h3>{nome}</h3>
                    <h4>R$ {valor}</h4>
                </div>
                <div className='btnProduto'>
                    {quantidade > 0
                        ?
                        <Link to={`/produto/${id}`}>
                            <FaShoppingCart className='iconCartHome' />
                            COMPRAR
                        </Link>
                        :
                        <h5>PRODUTO ESGOTADO</h5>
                    }
                </div>
            </div>
        </li>
    );
}