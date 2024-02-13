import './footer.css'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import logo from '../../Assets/logo1.png'

const Footer = () => {

    return (
        <footer>
                <div><img src={logo}></img></div>
                <div className='hotNum'>الخط الساخن: <span>16546</span></div>
                <div className='social midea'>
                    <FaYoutube></FaYoutube>
                    <FaFacebook></FaFacebook>
                    <FaInstagram></FaInstagram>
                    <FaTiktok></FaTiktok>
                </div>
                <p>تم صنع هذه المنصة بهدف تهيئة الطالب لـ كامل جوانب الثانوية العامة و ما بعدها</p>
        </footer>
    )
}

export default Footer