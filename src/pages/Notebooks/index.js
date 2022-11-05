import { useEffect, useContext, useState } from 'react';
import MyContext from '../../contexts/myContext';
import api from '../../services/api';
import CardProducts from '../../Components/CardProducts';
import './notebooks.css';




export default function Notebooks() {


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
    }, [])


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
        <div className="containerNotebooks">
            {pageOne
                &&
                <>
                    <div className='rowNotebooks'>
                        <ul>
                            {produtos.filter((produto) => produto.categoria === 'Notebooks').slice(0, 4).map((produto) => {
                                return (
                                    <CardProducts produto={produto} />
                                )
                            })}
                        </ul>
                    </div>
                    <div className='rowNotebooks'>
                        <ul>
                            {produtos.filter((produto) => produto.categoria === 'Notebooks').slice(4, 8).map((produto) => {
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
                    <div className='rowNotebooks'>
                        <ul>
                            {produtos.filter((produto) => produto.categoria === 'Notebooks').slice(8, 12).map((produto) => {
                                return (
                                    <CardProducts produto={produto} />
                                )
                            })}
                        </ul>
                    </div>
                    <div className='rowNotebooks'>
                        <ul>
                            {produtos.filter((produto) => produto.categoria === 'Notebooks').slice(12, 16).map((produto) => {
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