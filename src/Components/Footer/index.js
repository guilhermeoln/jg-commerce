import './footer.css';

import { FaCcVisa, FaCcPaypal, FaCcMastercard, FaCcAmex} from "react-icons/fa";


export default function Footer(){
    return(
        <div className="containerFooter">
            <div className='containerCardFooter'>
                <FaCcVisa className='iconFooter'/>
                <FaCcPaypal className='iconFooter'/>
                <FaCcMastercard className='iconFooter'/>
                <FaCcAmex className='iconFooter'/>
            </div>
            <div className='containerTextFooter'>
                <h3>Copyright &copy;2022, Todos os direitos reservados.</h3>
            </div>
        </div>
    );
}