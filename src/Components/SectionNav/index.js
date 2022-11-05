import './sectionNav.css'

import { Link } from 'react-router-dom';

import { useContext } from 'react';

import MyContext from '../../contexts/myContext';

export default function SectionNav(){

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

    return(
        <nav className={modoCliente ? 'navOn' : 'navOff'}>
            <Link to="/">Home</Link>
            <Link to="/celulares">Celulares</Link>
            <Link to="/notebooks">Notebooks</Link>
            <Link to="/hardwares">Hardwares</Link>
        </nav>
    );
}