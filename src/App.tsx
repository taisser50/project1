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






function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="pt-[80px]">
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
    </BrowserRouter>      
    </>
  );
}

export default App;
