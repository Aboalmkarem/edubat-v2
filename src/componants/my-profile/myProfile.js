import { FaUser } from 'react-icons/fa'
import './myProfile.css'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import User from './profile-pages/user/user'
import CCharge from './profile-pages/code-charge/cCharge'
import CCourses from './profile-pages/code-courses/cCourses'
import Wallet from './profile-pages/wallet/wallet'
import Courses from './profile-pages/courses/courses'

const MyProfile = () => {

    return (
        <div className='my-profile'>
            <div className='head'>
                <div>
                    <span>
                        <FaUser></FaUser>
                    </span>
                    <h2>ملف المستخدم</h2>
                </div>
            </div>
            <div className='profile-content'>
                <div className='slidebar'>
                    <ul>
                        <NavLink to='user'><li>ملف المستخدم</li></NavLink>
                        <NavLink to='code-charge'><li>شحن كود السنتر</li></NavLink>
                        <NavLink to='code-courses'><li>محاضرات واكواد السنتر</li></NavLink>
                        <NavLink to='wallet'><li>محفظتي</li></NavLink>
                        <NavLink to='courses'><li>كورساتي</li></NavLink>
                        <NavLink to='/'><li>كورساتي الاخري</li></NavLink>
                        <NavLink to='/'><li>الامان وتاريخ تسجيل الدخول</li></NavLink>
                        <NavLink to='/'><li>تفاصيل المشاهدات</li></NavLink>
                        <NavLink to='/'><li>الفواتير</li></NavLink>
                        <NavLink to='/'><li>الاشتراكات</li></NavLink>
                        <NavLink to='/'><li>نتائج الامتحانات</li></NavLink>
                        <NavLink to='/'><li>نتائج الواجب</li></NavLink>
                    </ul>
                </div>
                <div className='pages-div'>
                    <Routes>
                        <Route path='user' element={<User></User>}></Route>
                        <Route path='code-charge' element={<CCharge></CCharge>}></Route>
                        <Route path='code-courses' element={<CCourses></CCourses>}></Route>
                        <Route path='wallet' element={<Wallet></Wallet>}></Route>
                        <Route path='courses' element={<Courses></Courses>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default MyProfile