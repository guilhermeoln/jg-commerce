import { useState, useEffect, useContext} from 'react';
import './adicionarProduto.css';
import MyContext from '../../contexts/myContext';
import api from '../../services/api';
import { redirect, useNavigate } from 'react-router-dom';

export default function AdicionarProduto(){

    const [nomeProduto, setNomeProduto] = useState('');
    const [valorProduto, setValorProduto] = useState('');
    const [quantidadeProduto, setQuantidadeProduto] = useState('');
    const [imagemProduto, setImagemProduto] = useState('');
    const [categoriaProduto, setCategoriaProduto] = useState('');


    const navigate = useNavigate();

    useEffect(() =>{

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


    function setarValorProduto(event){
        let converteParaFloat = parseFloat(event.target.value)
        setValorProduto(converteParaFloat)
        
    }

    function setarQuantidadeProduto(event){
        let converteParaInt = parseInt(event.target.value);
        setQuantidadeProduto(converteParaInt)
    }

    async function addProduto(){
        await api.post('/Produtos', {
            nome: nomeProduto,
            categoria: categoriaProduto,
            imagem: imagemProduto,
            quantidade: quantidadeProduto,
            valor: valorProduto
        }).then(() =>{
            alert('Produto adicionado com sucesso!')
        }).catch(() =>{
            alert('Não foi possivel adicionar o produto!')
        })

    }

    function voltarPagina(){
        navigate('/painel');
    }


    return(
        <div className="containerAdicionarProduto">
            <form className='formAdicionarProduto' onSubmit={ addProduto }>
                <input type="text" maxLength={25} placeholder="Digite o nome do produto" value={ nomeProduto } onChange={e => setNomeProduto(e.target.value)} required/>
                <input type="text" placeholder='Insira a URL da imagem' onChange={ e => setImagemProduto(e.target.value) } required/>
                <select value={categoriaProduto} onChange={ e => setCategoriaProduto(e.target.value)} required>
                    <option>Hardware</option>
                    <option>Celular</option>
                    <option>Notebooks</option>
                </select>
                <input type="number" placeholder='Insira o valor do produto' min="1" max="99999999" value={valorProduto} onChange={ (e) => setarValorProduto(e)} required/>
                <input type="number" min="1" max="10" placeholder='Digite a quantidade' value={ quantidadeProduto } onChange={ (e) => setarQuantidadeProduto(e)} required/>
                <button>Adicionar</button>
            </form>
            <button className='btnVoltar' onClick={ voltarPagina }>Voltar</button>
        </div>
    );
}