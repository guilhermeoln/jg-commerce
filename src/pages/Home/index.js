import { useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import './home.css';
import MyContext from '../../contexts/myContext';
import api from '../../services/api';
import { FaArrowAltCircleRight, FaShoppingCart } from 'react-icons/fa';
import CardProducts from '../../Components/CardProducts';
import Modal from 'react-modal';


export default function Home() {

    const [modalBlackFriday, setModalBlackFriday] = useState(false);

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



    useEffect(() => {

        setModoCliente(true);

        async function carregarProdutos() {
            await api.get('/Produtos').then((response) => {
                setLoading(false);
                setProdutos(response.data);
            }).catch((err) => {
                console.log(err);
            })

        }


        carregarProdutos();

    }, [])

    function fecharModal(){
        setModalBlackFriday(false);
    }



    return (
        <div className="containerHome">
            <div className='containerCardsHome'>
                <div className='cardHome'>
                    <div className='imgCardHome'>
                        <img src="https://i.postimg.cc/vZxKnWMn/maxresdefault-12.jpg" alt="logo-laptop" />
                    </div>
                    <div className='titleCardHome'>
                        <h2>Notebooks</h2>
                        <Link to="/notebooks">Comprar agora <FaArrowAltCircleRight className='iconArrow' /></Link>
                    </div>
                </div>
                <div className='cardHome'>
                    <div className='imgCardHome'>
                        <img src="https://i.postimg.cc/7YFDGP7K/img-f8c7d70c7de8-1.webp" alt="logo-celulares" />
                    </div>
                    <div className='titleCardHome'>
                        <h2>Celulares</h2>
                        <Link to="/celulares">Comprar agora <FaArrowAltCircleRight className='iconArrow' /></Link>
                    </div>
                </div>
                <div className='cardHome'>
                    <div className='imgCardHome'>
                        <img src="https://i.postimg.cc/qMTqSGDJ/placa-video-1.webp" alt="logo-hardwares" />
                    </div>
                    <div className='titleCardHome'>
                        <h2>Hardwares</h2>
                        <Link to="/hardwares">Comprar agora <FaArrowAltCircleRight className='iconArrow' /></Link>
                    </div>
                </div>
            </div>
                <Modal
                isOpen={modalBlackFriday}
                style={{
                    content: {
                        width: "80%",
                        height: "80%",
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        zIndex: "3",
                        padding: "0px",
                        transform: "translate(-50%, -50%)",
                    }
                }}
                >   <button className='btnFecharModal' onClick={ fecharModal }>X</button>
                    <img src="https://i.postimg.cc/HxbLDycr/fundo-plano-preto-de-venda-sexta-feira-23-2149104181.webp" alt="img-modal" className='imgModal'/>
                </Modal>
                <div className='containerNewProducts'>
                    <div className='titleNewProducts'>
                        <h2>PRODUTOS RECENTES</h2>
                    </div>
                    {!loading
                        ?
                        <div className='contentProductsHome'>
                            <ul>
                                {produtos.slice(produtos.length - 4, produtos.length).reverse().map((produto) => {
                                    return (
                                        <CardProducts produto={produto} />
                                    );
                                })}
                            </ul>
                        </div>
                        :
                        <div className='containerLoadingHome'>
                            <span><ClipLoader /></span>
                        </div>
                    }
                </div>
                <div className='containerPromotionsHome'>
                    <div className='imgPromotionsHome'>
                        <img src="https://i.postimg.cc/5NpHSH5N/lenovo-laptop-thinkpad-t490-hero-1126.webp" alt="logo-not" />
                    </div>
                    <div className='textPromotionsHome'>
                        <img src="https://i.postimg.cc/8PGWHQqw/kisspng-brand-khuyn-mi-portable-network-graphics-imag-fortnite-banner-logo-png-bing-images-5ba32c7df.png" alt="logo-promotions" />
                        <h2>SEMANA DE PROMOÇÕES</h2>
                        <h3>NOVA COLEÇÃO COM 50% DE DESCONTO</h3>
                        <a href="">COMPRAR</a>
                    </div>
                    <div className='imgPromotionsHome'>
                        <img src="https://i.postimg.cc/Qd9XKV0z/headset-gamer-logitech-g335-3-5mm-para-pc-playstation-xbox-switch-mobile-driver-40mm-arco-ajustavel.png" />
                    </div>
                </div>
        </div>
    );
}