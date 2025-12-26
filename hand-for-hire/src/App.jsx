import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Banner from "./components/Banner";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      
    </>
  )
}

export default App
