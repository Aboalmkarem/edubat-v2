import './App.css';
import useLocalStorage from 'use-local-storage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './componants/navbar/navbar'
import Home from './componants/home/home'
import Footer from './componants/footer/footer'
import MyProfile from './componants/my-profile/myProfile'
import User from './componants/my-profile/profile-pages/user/user';

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
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
