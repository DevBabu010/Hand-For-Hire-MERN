import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css"; // ← this must exist
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Majorcities from "./components/Majorcities";
import Astrology from "./components/Astrologyservices";
import Wedding from "./components/Wedding";
import Gemstones from "./components/pages/Gemstones";
import Loginform from "./components/Loginform";
import Hamburgermenu from "./components/Hamburgermenu";
import Apitest from "./components/Apitest";



function App() {

  const [showLogin, setShowLogin] = useState(false);
  const [showHb, setShowHb] = useState(false);

  return (
    <>
    <Header 
    openLogin={() => setShowLogin(true)} 
    openHb={()=> setShowHb(true)}
    />

    {showLogin && (
      <Loginform onClose={() => setShowLogin(false)} />
      )}

    {showHb && (
      <Hamburgermenu onHbClose={() => setShowHb(false)}/>
    )}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Majorcities />
              <Astrology />
              <Wedding />
            </>
          }
        />

        <Route 
        path="/gemstones" 
        element={<Gemstones />         
        } 
        />

        <Route 
        path="/apitest" 
        element={<Apitest />         
        } 
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
