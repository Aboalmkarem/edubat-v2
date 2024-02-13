import './App.css';
import useLocalStorage from 'use-local-storage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './componants/navbar/navbar'
import Home from './componants/home/home'
import Footer from './componants/footer/footer'

function App() {

  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <BrowserRouter>
        <Navbar isChecked={isDark} handleChange={() => {setIsDark(!isDark)}}></Navbar>
        <Routes>
          <Route path='/edubat' element={<Home></Home>}></Route>

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
