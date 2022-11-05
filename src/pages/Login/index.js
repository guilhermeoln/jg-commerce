import './login.css';

import { Link } from 'react-router-dom';

import { useEffect, useContext} from 'react';

import MyContext from '../../contexts/myContext';


export default function Login(){

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

    useEffect(() =>{
        setModoCliente(false);
        setProductsCart([]);
    },[])

    return(
        <div className="containerLogin">
            <h2>Digite as suas credenciais</h2>
            <input type="text" placeholder='Digite seu login' />
            <input type="password" placeholder='Digite sua senha' />
            <button>ENTRAR</button>
        </div>
    );
}