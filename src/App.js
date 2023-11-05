import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import AboutMe from './pages/aboutMe/aboutMe';
import Products from './pages/products/products';
import Contact from './pages/contact/contact';
import wsp from './images/wsp.png'


function App() {
  return (
    <div className="App" id='app'>
      <Navbar />
      <Home />
      <AboutMe />
      <Products />
      <Contact />
      <Footer />
      <a href='https://wa.link/86651z' target='__blank'>
        <img src={wsp} alt='whatsapp' className='whatsapp'/>
      </a>
    </div>
  );
}

export default App;