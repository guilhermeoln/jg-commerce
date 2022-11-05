import { useContext, useEffect, useState } from 'react';
import api from '../../services/api';
import './celulares.css';
import MyContext from '../../contexts/myContext';
import { FaArrowAltCircleRight, FaShoppingCart } from 'react-icons/fa';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CardProducts from '../../Components/CardProducts';

export default function Celulares() {

    const [pageOne, setPageOne] = useState(true);
    const [pageTwo, setPageTwo] = useState(false);

    useEffect(() => {
        async function loadApi() {
            await api.get('/Produtos').then((response) => {
                setLoading(false);
                setProdutos(response.data);
            }).catch((err) => {
                console.log(err);
            })
        }

        loadApi();
    }, []);


    function toPageOne() {
        setPageTwo(false);
        setPageOne(true);
    }

    function toPageTwo() {
        setPageOne(false);
        setPageTwo(true);
    }


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
        <div className="containerCelulares">
            {pageOne
                &&
                <>
                    <div className='rowCelulares'>
                        <ul>
                            {produtos.filter((produto) => produto.categoria === 'Celular').slice(0, 4).map((produto) => {
                                return (
                                    <CardProducts produto={produto} />
                                )
                            })}
                        </ul>
                    </div>
                    <div className='rowCelulares'>
                        <ul>
                            {produtos.filter((produto) => produto.categoria === 'Celular').slice(4, 8).map((produto) => {
                                return (
                                    <CardProducts produto={produto} />
                                )
                            })}
                        </ul>
                    </div>
                </>
            }
            {pageTwo
                &&
                <>
                    <div className='rowCelulares'>
                        <ul>
                            {produtos.filter((produto) => produto.categoria === 'Celular').slice(8, 12).map((produto) => {
                                return (
                                    <CardProducts produto={produto} />
                                )
                            })}
                        </ul>
                    </div>
                    <div className='rowCelulares'>
                        <ul>
                            {produtos.filter((produto) => produto.categoria === 'Celular').slice(12, 16).map((produto) => {
                                return (
                                    <CardProducts produto={produto} />
                                )
                            })}
                        </ul>
                    </div>
                </>
            }
            <div className='pagination'>
                <button onClick={toPageOne} className={pageOne ? 'btnOn' : 'btnOff'}>1</button>
                <button onClick={toPageTwo} className={pageTwo ? 'btnOn' : 'btnOff'}>2</button>
            </div>
        </div>
    );
}