import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Banner from "./components/Banner";
import Majorcities from "./components/Majorcities";
import Footer from "./components/Footer";
import Astrology from "./components/Astrologyservices";
import Wedding from "./components/Wedding";
import Loginform from "./components/Loginform";
import Hamburgermenu from './components/Hamburgermenu';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showHb, setShowHb] = useState(false);

  return (
    
    <>

        <Header 
          openLogin={() => setShowLogin(true)} 
          openHb={()=> setShowHb(true)}
          
        />
      


        {showHb && (
          <Hamburgermenu onHbClose={() => setShowHb(false)} />
          )}
      

        {showLogin && (
          <Loginform onClose={() => setShowLogin(false)} />
        )}
      <Banner/>
      
      <Majorcities/>
      <Astrology/>
      <Wedding/>
      <Footer/>
      
      
    </>
  )
}

export default App
