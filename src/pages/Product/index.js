import { useEffect, useContext, useState} from 'react';
import MyContext from '../../contexts/myContext';
import './product.css';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { FaShoppingCart } from 'react-icons/fa';


export default function Product(){

    const [productSelected, setProductSelected] = useState({});

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() =>{

        async function loadProduct(){
            await api.get(`/Produtos/${id}`).then((response) =>{
                setProductSelected({
                    ...response.data,
                    quantidadeCompra : 1
                });
            }).catch((err) =>{
                console.log(err)
            })
        }

        loadProduct();

    },[])


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

    const {nome, categoria, imagem, valor, quantidade, quantidadeCompra} = productSelected;

    function decrementCountItem(){
        if(quantidadeCompra > 1){
             setProductSelected({
                ...productSelected,
                quantidadeCompra: quantidadeCompra - 1
             })
        } else{
            return;
        }
     }
 
     function incrementCountItem(){
         if(quantidadeCompra < quantidade){
            setProductSelected({
                ...productSelected,
                quantidadeCompra: quantidadeCompra + 1
             })
         } else{
            return;
         }
 
     }


    return(
        <div className="containerProduct">
            <div className="imgProduct">
                <img src={imagem} alt="imgProduto" />
            </div>
            <div className="infoProduct">
                <h2>{nome}</h2>
                <span>{categoria}</span>
                <p>Em estoque: {quantidade}</p>
                <div className='contentQuantidadeProduto'>
                    <button onClick={ decrementCountItem }>-</button>
                    <p>{quantidadeCompra}</p>
                    <button onClick={ incrementCountItem }>+</button>
                </div>
                <h4>R$ {valor * quantidadeCompra}</h4>
                <button onClick={() => addToCart(id, nome, quantidade, categoria, valor, imagem, quantidadeCompra)}><FaShoppingCart className='iconCartProduct'/>ADICIONAR</button>
            </div>
        </div>
    );
}