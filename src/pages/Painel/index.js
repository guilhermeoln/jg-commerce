import './painel.css'
import { useNavigate } from 'react-router-dom';




export default function Painel(){

    const navigate = useNavigate();


    function toHome(){
        navigate('/');
    }

    function toAdicionarProduto(){
        navigate('/adicionarProduto');
    }

    function toListarProduto(){
        navigate('/listarProduto');
    }

    return(
        <div className="containerPainel">
            <button onClick={ toAdicionarProduto }>Adicionar Produtos</button>
            <button onClick={ toListarProduto }>Listar Produtos</button>
            <button>Editar Produtos</button>
            <button onClick={ toHome }>sair</button>
        </div>
    );
}