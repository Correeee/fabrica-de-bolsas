import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import AboutMe from './pages/aboutMe/aboutMe';
import Products from './pages/products/products';
import Contact from './pages/contact/contact';
import wsp from './images/wsp.png'
import Loader from './components/loader/loader';
import { useState } from 'react';


function App() {

  const [isLoading, setIsloading] = useState(true)

  setTimeout(() => {
    setIsloading(false)
  }, 2500);


  return (
    <div className="App" id='app'>
      {
        isLoading ?
          <Loader />
          :
          <>
            <Navbar />
            <Home />
            <AboutMe />
            <Products />
            <Contact />
            <Footer />
            <a href='https://wa.link/seyht3' target='__blank'>
              <img src={wsp} alt='whatsapp' className='whatsapp' />
            </a>
          </>
      }
    </div>
  );
}

export default App;
