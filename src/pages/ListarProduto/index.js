import './listarProduto.css';
import api from '../../services/api';
import { useEffect, useState, useContext} from 'react';
import MyContext from '../../contexts/myContext';


export default function ListarProduto(){

    const [listaProdutos, setListaProdutos] = useState([]);

    useEffect(() =>{
        
        async function carregarProdutos(){
            await api.get('/Produtos').then((response) =>{
                setListaProdutos(response.data)
            }).catch((err) =>{
                console.log(err);
            })
        }

        carregarProdutos();

        setModoCliente(false);

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


    async function excluirProduto(idProduto){
        await api.delete(`/Produtos/${idProduto}`).then(() =>{
            alert('Produto excluido com sucesso!')
            window.location.reload(true);
        }).catch((err) =>{
            console.log(err);
        })
    }



    return(
        <div className="containerListarProduto">
            <div className='conteudoListarProduto'>
                {listaProdutos.map((produto) =>{
                    return(
                        <div key={produto.id} className="rowListarProduto">
                            <p>ID: <span>{produto.id}</span></p>
                            <p>{produto.nome}</p>
                            <p>Qtd: <span>{produto.quantidade}</span></p>
                            <p>R$ <span>{produto.valor}</span></p>
                            <button onClick={ () => excluirProduto(produto.id)}>Excluir</button>
                        </div>
                    );
                })
                }
            </div>
        </div>
    );
}