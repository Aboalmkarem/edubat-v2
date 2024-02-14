import { FaUser } from 'react-icons/fa'
import './myProfile.css'
import { Link, Route, Routes } from 'react-router-dom'
import User from './profile-pages/user/user'

const MyProfile = () => {

    return (
        <div className='my-profile'>
            <div className='h2-container'>
                <FaUser></FaUser>
                <h2>ملف المستخدم</h2>
            </div>
            <div className='profile-content'>
                <div className='slidebar'>
                    <ul>
                        <Link to='user'><li>ملف المستخدم</li></Link>
                        <Link to='/myProfile/'><li>شحن كود السنتر</li></Link>
                        <Link to='/myProfile/'><li>محاضرات واكواد السنتر</li></Link>
                        <Link to='/myProfile/'><li>محفظتي</li></Link>
                        <Link to='/myProfile/'><li>كورساتي</li></Link>
                        <Link to='/myProfile/'><li>كورساتي الاخري</li></Link>
                        <Link to='/myProfile/'><li>الامان وتاريخ تسجيل الدخول</li></Link>
                        <Link to='/myProfile/'><li>تفاصيل المشاهدات</li></Link>
                        <Link to='/myProfile/'><li>الفواتير</li></Link>
                        <Link to='/myProfile/'><li>الاشتراكات</li></Link>
                        <Link to='/myProfile/'><li>نتائج الامتحانات</li></Link>
                        <Link to='/myProfile/'><li>نتائج الواجب</li></Link>
                    </ul>
                </div>
                <div className='pages-div'>
                    <Routes>
                        <Route path='user' element={<User></User>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default MyProfile