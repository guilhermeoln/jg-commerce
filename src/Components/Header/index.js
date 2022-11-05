import { useState, useContext}  from 'react';

import { Link } from 'react-router-dom';

import api from '../../services/api';


import './header.css';

import MyContext from '../../contexts/myContext';

import { FaRegUser, FaShoppingCart } from "react-icons/fa";

import { toast } from 'react-toastify';



export default function Header(){

    const {
        loading,
        setLoading,
        productsCart,
        setProductsCart,
        produtos,
        setProdutos,
        addToCart
    } = useContext(MyContext)

    let tamanhoCarrinho = productsCart.length;




    return(
        <div className="containerHeader">
            <div className='containerBtnAcessoAdministrador'>
                <FaRegUser className='iconAdmin'/>
                <Link to="/login">Acesso Administrador</Link>
            </div>
            <div className='containerPesquisaHeader'>
                <Link to="/"><h1>JG</h1></Link>
                <select>
                    <option>Todas Categorias</option>
                </select>
                <input type="text" placeholder='Pesquise aqui...'/>
                <button>Pesquisar</button>
                <div className='containerHeaderCart'>
                    <Link to="/carrinho"><FaShoppingCart className='iconCart'/></Link>
                    <span>Carrinho</span>
                    <h5>{tamanhoCarrinho}</h5>
                </div>
            </div>
        </div>
    );
}