import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Navbar";
import Fas from "./Pages/Fas";
import Jop from "./Pages/jop";
import ContactUs from "./Pages/contactus";
import AboutCo from "./Pages/AboutCo";
import ADTBARRIER from "./Pages/ADTBARRIER";
import SolarSystem from "./Pages/SolarSystem";
import Contracting from "./Pages/Contracting";
import SoftwareADT from "./Pages/SoftwareADT";
import OurSolutions from "./Pages/OurSolutions";
import Login from "./Pages/Login";
import HIK from "./Pages/HIK";

import Footer1 from "./components/Footer1";
import ScrollToTop from "./components/ScrollToTop";
import BackToTopButton from "./components/BackToTopButton";
import DarkModeToggle from "./components/DarkModeToggle";
import { ThemeContext } from "./components/context/ThemeContext";
import { useContext } from "react";






function App() {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    
    <>
      
      <BrowserRouter>
      <div className={darkMode ? "dark" : ""}>
       <ScrollToTop smooth={true}/>
        <Navbar />
        <div className="pt-[0px]">
          
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Fas" element={<Fas />} />
        <Route path="/Jop" element={<Jop />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutCo" element={<AboutCo />} />
        <Route path="/ADTBARRIER" element={<ADTBARRIER />} />
        <Route path="/SolarSystem" element={<SolarSystem />} />
        <Route path="/Contracting" element={<Contracting />} />
        <Route path="/SoftwareADT" element={<SoftwareADT />} />
        <Route path="/OurSolutions" element={<OurSolutions />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/HIK"  element={<HIK />} />
          
      </Routes>
     
     </div>
     
     <div className="p-[40px]"></div>
     <Footer1/>
      
      <BackToTopButton
        threshold={200}        
        size={60}              
        bgColor="to-blue-600"      
        iconColor="#000000ff"
      /></div>
    </BrowserRouter>      
    </>
  );
}

export default App;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}

