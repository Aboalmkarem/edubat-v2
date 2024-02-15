import './App.css';
import useLocalStorage from 'use-local-storage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './componants/navbar/navbar'
import Home from './componants/home/home'
import Footer from './componants/footer/footer'
import MyProfile from './componants/my-profile/myProfile'
import User from './componants/my-profile/profile-pages/user/user';
import CCharge from './componants/my-profile/profile-pages/code-charge/cCharge';
import CCourses from './componants/my-profile/profile-pages/code-courses/cCourses';
import Wallet from './componants/my-profile/profile-pages/wallet/wallet';
import Courses from './componants/my-profile/profile-pages/courses/courses';

function App() {

  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <BrowserRouter>
        <Navbar isChecked={isDark} handleChange={() => {setIsDark(!isDark)}}></Navbar>
        <Routes>
          <Route path='/edubat-v2' element={<Home></Home>} />
          <Route path='/myProfile' element={<MyProfile></MyProfile>}>
            <Route path='user' element={<User></User>}></Route>
            <Route path='code-charge' element={<CCharge></CCharge>}></Route>
            <Route path='code-courses' element={<CCourses></CCourses>}></Route>
            <Route path='wallet' element={<Wallet></Wallet>}></Route>
            <Route path='courses' element={<Courses></Courses>}></Route>
            <Route path='other-courses' element={<Courses></Courses>}></Route>
            <Route path='login-date' element={<Courses></Courses>}></Route>
            <Route path='video-views' element={<Courses></Courses>}></Route>
            <Route path='invoices' element={<Courses></Courses>}></Route>
            <Route path='subscriptions' element={<Courses></Courses>}></Route>
            <Route path='exam-resultes' element={<Courses></Courses>}></Route>
            <Route path='homework-resultes' element={<Courses></Courses>}></Route>
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
