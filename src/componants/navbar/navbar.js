import './navbar.css'
import logo from '../../Assets/logo1.png'
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaBell, FaHeadphones, FaHome, FaRing, FaSearch, FaUser, FaWallet } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';

const Navbar = ({isChecked, handleChange}) => { 


    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    let drop = useRef()
    let drop2 = useRef()


    useEffect(() => {
        let handle = (e) => {
            if (!drop.current.contains(e.target)) {
                setOpen(false)
            }
            if (!drop2.current.contains(e.target)) {
                setOpen2(false)
            }
        }
        document.addEventListener('mousedown', handle)
    })

    return (
        <div className='navbar'>
            <div className='nav'>
                <Link to='/edubat-v2'><img src={logo}></img></Link>
                <div className="theme">
                    <div>
                        <label className="swap swap-rotate">
                            <input type="checkbox" 
                                onChange={handleChange}
                                checked={isChecked}
                                />
                            <svg className="sun swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                            <svg className="moon swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                        </label>
                    </div>
                </div>
                <div className='float'>
                    <FaSearch className='pointer'></FaSearch>
                    <Link to='/myProfile/wallet'>
                        <div className='wallet'>
                            <p>0 جنيه</p>
                            <span  className='w-icon'>
                                <FaWallet></FaWallet>
                            </span>
                        </div>
                    </Link>
                    <FaBell className='pointer' onClick={() => {setOpen2(!open2)}}></FaBell>
                    <div className={`notifications ${open2? 'active': ''}`} ref={drop2}>لا توجد لديك اشعارات</div>
                    <FaUser className='pointer' onClick={() => {setOpen(!open)}}></FaUser>
                    <div className={`user-dropMenu ${open? 'active': ''}`} ref={drop}>
                        <ul>
                        <Link to='/edubat-v2'><li onClick={() => {setOpen(!open)}}>الصفحة الرئيسية</li></Link>
                            <hr></hr>
                            <p>اهلا محمد</p>
                            <Link to='/'><li onClick={() => {setOpen(!open)}}>منتدي الطلبة</li></Link>
                            <Link to='/myProfile/code-charge'><li onClick={() => {setOpen(!open)}}>شحن كود السنتر</li></Link>
                            <Link to='/myProfile/user'><li onClick={() => {setOpen(!open)}}>حسابي</li></Link>
                            <Link to='/myProfile/wallet'><li onClick={() => {setOpen(!open)}}>محفظتي</li></Link>
                            <Link to='/myProfile/courses'><li onClick={() => {setOpen(!open)}}>كورساتي</li></Link>
                            <Link to='/myProfile/other-courses'><li onClick={() => {setOpen(!open)}}>كورساتي الاخري</li></Link>
                            <Link to='/'><li onClick={() => {setOpen(!open)}}>تسجيل خروج</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar