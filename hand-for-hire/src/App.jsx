import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Banner from "./components/Banner";
import Majorcities from "./components/Majorcities";
import Footer from "./components/Footer";
import Astrology from "./components/Astrologyservices";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <Majorcities/>

      <Astrology/>
      <Footer/>
      
      
    </>
  )
}

export default App
