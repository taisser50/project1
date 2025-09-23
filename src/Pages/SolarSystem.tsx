import { useEffect,useState } from "react";

import PageContainer from "../components/PageContainer";
import GlassButton from "../components/GlassButton";
import ProductCard from "../components/ProductCardProps";




function SolarSystem() {
    return (
        <PageContainer>
            <h1 className=" font-bold text-center text-5xl text-[#013a63]">Solar System</h1>
            <div className="pt-[20px]"></div>
            <h3 className=" font-bold text-center text-2xl text-[#013a63]">SOLAR PANEL</h3>
            <div className="pt-[20px]"></div>

            <p className=" text-center text-lg text-[#013a63]">Our solar panel products will be available soon. Stay tuned for updates!</p>
            <div className="pt-[20px]"></div>
            <ProductCard
              imageSrc="images/seolo.png"
              alt="Solar Panel"
              title="High Efficiency Solar Panel"
              description="Our high-efficiency solar panels are designed to maximize energy production."
            />
            <div className="pt-[20px]"></div>
             <ProductCard
              imageSrc="images/Longi-s.png"
              alt="Solar Panel"
              title="High Efficiency Solar Panel"
              description="Founded in 2000, LONGi is committed to being the world’s leading solar technology company, focusing on customer-driven value creation for full scenario energy transformation.
Under its mission of “making the best of solar energy to build a green world” and brand positioning of “the most trusted, reliable solar company that blazes the trail for green technology”, LONGi has dedicated itself to technology innovation and established five business sectors, covering mono-crystalline silicon wafers, mono-crystalline silicon cells/mono-crystalline silicon modules, distributed photovoltaic solutions, utility plant system solutions, and hydrogen energy equipment solutions.
"
            />
            <div className="pt-[20px]"></div>
             <ProductCard
              imageSrc="images/solar1.png"
              alt="Solar Panel"
              title="High Efficiency Solar Panel"
              description="Founded in 2000, LONGi is committed to being the world’s leading solar technology company, focusing on customer-driven value creation for full scenario energy transformation.
Under its mission of “making the best of solar energy to build a green world” and brand positioning of “the most trusted, reliable solar company that blazes the trail for green technology”, LONGi has dedicated itself to technology innovation and established five business sectors, covering mono-crystalline silicon wafers, mono-crystalline silicon cells/mono-crystalline silicon modules, distributed photovoltaic solutions, utility plant system solutions, and hydrogen energy equipment solutions.
"
            />
            <div className="pt-[20px]"></div>
             <ProductCard
              imageSrc="images/psolar2.png"
              alt="Solar Panel"
              title="High Efficiency Solar Panel"
              description="Founded in 2000, LONGi is committed to being the world’s leading solar technology company, focusing on customer-driven value creation for full scenario energy transformation.
Under its mission of “making the best of solar energy to build a green world” and brand positioning of “the most trusted, reliable solar company that blazes the trail for green technology”, LONGi has dedicated itself to technology innovation and established five business sectors, covering mono-crystalline silicon wafers, mono-crystalline silicon cells/mono-crystalline silicon modules, distributed photovoltaic solutions, utility plant system solutions, and hydrogen energy equipment solutions.
"
            />
            <div className="pt-[20px]"></div>
            <div className=" text-center">
            <GlassButton  text="Learn More "
            size="lg"
            className="bg-[#01497c] hover:bg-[#01497c] transition text-white font-semibold p-3 rounded-lg shadow-lg hover:shadow-xl duration-300 ease-in-out center"
          onClick={() => window.open ("https://www.longi.com/us/")}/>
            </div>
            <div className="pt-[20px]"></div>
           
        </PageContainer>
    );


}

export default SolarSystem;