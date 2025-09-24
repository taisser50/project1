import React, { useState } from "react";
import PageContainer from "../components/PageContainer";
import { motion, AnimatePresence } from "framer-motion";
import GlassButton from "../components/GlassButton";
import CertificatesGallery from "../components/CertificatesGallery";
import ProductCard from "../components/ProductCardProps";
import { MarqueeImage, ThreeDMarquee } from "../components/ThreeDImageRing";
import ThreeDHoverGallery from "../components/3d-hover-gallery";
import BackendMessage from "../components/BackendMessage";


const clickableImages: MarqueeImage[] = [
  {
    src: "images/ourwork/ourwork1/s.jpg",
    alt: "Portfolio Item 1",
    href: "1",
    target: "_blank"
  },
  {src: "https://images.pexels.com/photos/12194487/pexels-photo-12194487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Portfolio Item 1",
    href: "1",
    target: "_blank"},
    {src: "https://images.pexels.com/photos/32423809/pexels-photo-32423809/free-photo-of-aerial-view-of-kayaking-at-robberg-south-africa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Portfolio Item 1",
    href: "1",
    target: "_blank"},
    {src: "images/ourwork/ourrwork1/s.jpg",
    alt: "Portfolio Item 1",
    href: "1",
    target: "_blank"},
    {src: "images/ourwork/ourrwork1/s4.jpg",
    alt: "Portfolio Item 1",
    href: "1",  
    target: "_blank"
  },
  {src: "images/ourwork/ourrwork1/s5.jpg",
    alt: "Portfolio Item 1",
    href: "1",  
    target: "_blank"
  },
  {src: "images/ourwork/ourrwork1/s6.jpg",
    alt: "Portfolio Item 1",    
    href: "1",
    target: "_blank"
  } ,
  {src: "images/ourwork/ourrwork1/s7.jpg",
    alt: "Portfolio Item 1",
    href: "1",
    target: "_blank"
  },
  {src: "images/ourwork/ourrwork1/s8.jpg",
    alt: "Portfolio Item 1",
    href: "1",  
    target: "_blank"
  },
  {src: "images/ourwork/ourrwork1/s9.jpg",
    alt: "Portfolio Item 1",
    href: "1",    
    target: "_blank"
  },
  {src: "images/ourwork/ourrwork1/s10.jpg",
    alt: "Portfolio Item 1",
    href: "1",
    target: "_blank"
  },
  {src: "images/ourwork/ourrwork1/s11.jpg",
    alt: "Portfolio Item 1",
    href: "1",  
    target: "_blank"
  },
  {src: "images/ourwork/ourrwork1/s12.jpg",
    alt: "Portfolio Item 1",
    href: "1",  
    target: "_blank"
  },
  {src: "images/ourwork/ourrwork1/s13.jpg",
    alt: "Portfolio Item 1",
    href: "1",
    target: "_blank"
  },
  {src: "images/ourwork/ourrwork1/s14.jpg",
    alt: "Portfolio Item 1",
    href: "1",
    target: "_blank"
  },
  {src: "images/ourwork/ourrwork1/s15.jpg",
    alt: "Portfolio Item 1",
    href: "1",
    target: "_blank"
  },
  {src: "images/ourwork/ourrwork1/s16.jpg",
    alt: "Portfolio Item 1",
    href: "1",
    target: "_blank"
  },
  {src: "images/ourwork/ourrwork1/s17.jpg",
    alt: "Portfolio Item 1",
    href: "1",
    target: "_blank"
  },
  {src: "images/ourwork/ourrwork1/s18.jpg",
    alt: "Portfolio Item 1",
    href: "1",
    target: "_blank"
  },
  {src: "images/ourwork/ourrwork1/s19.jpg",
    alt: "Portfolio Item 1",
    href: "1",
    target: "_blank"
  },
  {src: "images/ourwork/ourrwork1/s20.jpg  ",
    alt: "Portfolio Item 1",
    href: "1",
    target: "_blank"
  },
  {src: "images/ourwork/ourrwork1/s21.jpg",
    alt: "Portfolio Item 1",
    href: "1",  
    target: "_blank"
  },
  {src: "images/ourwork/ourrwork1/s22.jpg",
    alt: "Portfolio Item 1",
    href: "1",  
    target: "_blank"
  },
  {src: "images/ourwork/ourrwork1/s23.jpg",
    alt: "Portfolio Item 1",
    href: "1",
    target: "_blank"
  },
  {src: "images/ourwork/ourrwork1/s24.jpg",
    alt: "Portfolio Item 1",
    href: "1",
    target: "_blank"
  },
  {src: "images/ourwork/ourrwork1/s25.jpg",
    alt: "Portfolio Item 1",
    href: "1",
    target: "_blank"
  },
  {src: "images/ourwork/ourrwork1/s26.jpg",
    alt: "Portfolio Item 1",
    href: "1",
    target: "_blank"
  }
];
const manyImages = Array.from({ length: 20 }, (_, i) => ({
  src: `images/ourwork/ourrwork1/s${i + 1}.jpg`,
  alt: `Gallery image ${i + 1}`,
  href: ``,
}));


const portfolioImages = [
  { 
    src: "images/ourwork/ourrwork1/s1.jpg", 
    alt: "Project Alpha",
    href: "/projects/alpha"
  },
  { 
    src: "images/ourwork/ourrwork1/s25.jpg",
    alt: "Project Beta",
    href: "/projects/beta"
  }
];


const products = [
  {
    imageSrc: "images/ourwork/fireAlarm/f1.png",
    alt: "Fire Alarm SEC3002",
    title: "Fire alarm control panel SEC3002",
    description: `Product features:
LPCB and CPR approval.
324 addresses for one loop or 510 addresses for two loops.
4.3’’ color screen LCD, resolution of 480×272.
Zone indication and control panel for 32 zones gives a quick indication of the location of an alarm.
Record capacity of 1000 historical events with date/time stamp.`
  },
  {
    imageSrc: "images/ourwork/fireAlarm/f2.png",
    alt: "Fire Alarm SEC1000",
    title: "Fire alarm control panel SEC1000",
    description: `Up to 120 addresses on one loop.
The loop supports class A and Class B types.
An easy to read, 4.3" color screen LCD with a resolution of 480×272.
Zone indicators for 16 zones gives a quick indication of the location of an alarm.
Record capacity of 1000 historical events for each of historical fire, fault, and operation.
An independently programmable conventional sounder circuit output.
Integral power supply and battery.
Flexible and intuitive cause and effect programming on front panel.
Zone test, point test, and module start/stop testing facilitate commissioning.
U-disk interface makes the load and save of configuration or historical data convenient.
Hierarchy management with three access levels.
Anti-tamper protection by a key lock.
CAN bus for interconnection of up to 20 FACPs.`
  },
  {
    imageSrc: "images/ourwork/fireAlarm/f3.png",
    alt: "Fire Alarm SEC3008",
    title: "Fire alarm control panel SEC3008",
    description: `EN54-2 & EN54-4 certified by LPCB and Applus.
7.0 inch color touch-sensitive screen LCD, resolution of 800×480.
324 addresses for 1 loop, max 8 loops.
A maximum of 5000 fire protection zones are supported. More user-friendly Night Mode Time Range Settings.
Networkable: CAN bus for interconnection of up to 60 FACPs and Ethernet for up to 254 FACPs.
Fire alarm, fault, C&E and operation, each category can store up to 10000 records.`
  },
  {
    imageSrc: "images/ourwork/fireAlarm/f5.png",
    alt: "Fire Alarm SEC3004",
    title: "Fire alarm control panel SEC3004",
    description: `EN54-2 & EN54-4 certified by LPCB and Applus.
7.0 inch color touch-sensitive screen LCD, resolution of 800×480.
324 addresses for 1 loop, max 4 loops.
A maximum of 5000 fire protection zones are supported. More user-friendly Night Mode Time Range Settings.
Networkable: CAN bus for interconnection of up to 60 FACPs and Ethernet for up to 254 FACPs.
Fire alarm, fault, C&E and operation, each category can store up to 10000 records.`
  },
  {
    imageSrc: "images/ourwork/fireAlarm/f6.png",
    alt: "Addressable Photoelectric Smoke Detector A9030T",
    title: "Addressable Photoelectric Smoke Detector A9030T",
    description: `LPCB & CPR approval.
It supports soft addressing and rewriting the address via coder in situ.
Within a single-chip microcomputer, it can process the sampling data in real-time, save the latest 144 historical data and realize a curve tracing for the field situation.`
  },
  {
    imageSrc: "images/ourwork/fireAlarm/f7.png",
    alt: "Addressable Heat Fire Detector A9020T",
    title: "Addressable Heat Fire Detector A9020T",
    description: `LPCB and CPR approval.
It supports soft addressing and rewriting the address via coder in situ.
Within a single-chip microcomputer, it can collect real-time data and process it to realize a curve tracing for the field situation.`
  },
  {
    imageSrc: "images/ourwork/fireAlarm/f8.png",
    alt: "Addressable Optical Smoke and Heat Multisensor Detector A9036T",
    title: "Addressable Optical Smoke and Heat Multisensor Detector A9036T",
    description: `The low profile design of the Optical/Heat Multisensor detector is sleek and evolutionary, with a 360° LED indicator which illuminates red when in alarm.
Non-polarity, two-bus connection ensures convenient installation and maintenance.
It can realize electronic coding and rewrite the address via coder in situ.
Within a single-chip MCU, it can realize real-time data acquisition and processing.
Temperature, humidity, and dust accumulation drift compensation function, plus sensor fault detection.`
  },
  {
    imageSrc: "images/ourwork/fireAlarm/f9.png",
    alt: "Manual Call Point A9060T",
    title: "Manual Call Point A9060T",
    description: `LPCB and CPR approval.
Semi-flush or surface mount.
Lever reusable (non-glass break).
LED indicator.`
  },
  {
    imageSrc: "images/ourwork/fireAlarm/f10.png",
    alt: "Addressable Sounder visual indicator A9091T",
    title: "Addressable Sounder visual indicator A9091T",
    description: `Meet both EN54-3 and EN54-23.
Designed with an upper cover and a lower cover and installed on an independent base, it can be installed, debugged and maintained conveniently.
Suitable for wall and ceiling mount application.
Providing 16 tones.
Highly efficient LED technology and specially designed lens.
Light output synchronization.`
  },
  {
    imageSrc: "images/ourwork/fireAlarm/f11.png",
    alt: "Fire Alarm SEC3008",
    title: "Fire alarm control panel SEC3008",
    description: `EN54-2 & EN54-4 certified by LPCB and Applus.
7.0 inch color touch-sensitive screen LCD, resolution of 800×480.
324 addresses for 1 loop, max 8 loops.
A maximum of 5000 fire protection zones are supported.
Networkable: CAN bus for interconnection of up to 60 FACPs and Ethernet for up to 254 FACPs.
Fire alarm, fault, C&E and operation, each category can store up to 10000 records.`
  },
  {
    imageSrc: "images/ourwork/fireAlarm/f12.png",
    alt: "Conventional heat detector C9021T",
    title: "Conventional heat detector C9021T",
    description: `Designed with an upper cover and a lower cover, it can be installed, debugged and maintained conveniently.
Real-time monitoring to accurately determine ambient temperature conditions in protected areas.
Non-addressable, non-polarity, two-bus connection ensures convenient installation and maintenance.`
  },
  {
    imageSrc: "images/ourwork/fireAlarm/f13.png",
    alt: "CONVENTIONAL SMOKE DETECTOR C9020T",
    title: "CONVENTIONAL SMOKE DETECTOR C9020T",
    description: `Designed with an upper cover and a lower cover, it can be installed, debugged and maintained conveniently.
Real-time monitoring to accurately determine ambient temperature conditions in protected areas.
Non-addressable, non-polarity, two-bus connection ensures convenient installation and maintenance.`
  },
  {
    imageSrc: "images/ourwork/fireAlarm/f14.png",
    alt: "Conventional manual call point C9060T",
    title: "Conventional manual call point C9060T",
    description: `Designed with an upper cover and a lower cover, it can be installed, debugged and maintained conveniently.
Multiple can be used in parallel, and the terminal load must be connected at the end.
The pressing sheet on the manual fire alarm call point will not get crushed after it is pressed, but can be reset by a special tool, so it can be used repeatedly.`
  },
  {
    imageSrc: "images/ourwork/fireAlarm/f15.png",
    alt: "Conventional Sounder Beacon C9092T",
    title: "Conventional Sounder Beacon C9092T",
    description: `Choice of up to tone modes.
Adopting independent base, simple and convenient for installation, commissioning and maintenance.
The light display adopts multiple ultra-high brightness LEDs, with eye-catching display, long life and low power consumption.
Tamper-evident function is possible.`,
    textArea: ``
  },
];


function Fas() {
  const [showInfo, setShowInfo] = useState(false);

  function handleCustomAction(image: MarqueeImage, index: number) {
    throw new Error("Function not implemented.");
  }

  return (
    <PageContainer>
      
      <div className="pt-[10px]"></div>
   
      <h5 className="text-center font-bold text-blue-500 text-size-50px">SANJIANG</h5>
       <h2 className="text-xl font-bold mb-2 text-size-50px text-center">Fire Alarm System</h2>
       <div className="pt-[20px]"></div>
       <div  className="text-center text-3xl text-[#013a63] font-semibold px-4 md:px-24 leading-relaxed"> 
        <GlassButton  
            text="Learn More "
            size="lg"
            className="bg-[#012a4a] hover:bg-[#01497c] transition text-white font-semibold p-3 rounded-lg"
          onClick={() => window.open ("https://www.sanjiang-security.com/productdetail/conventional%20fire%20alarm%20controller.html")} // تنقل خارجي
          />
</div>
     {products.map((p, idx) => (
        <div key={idx} className="pt-[40px] text-center text-size-30px">
          <ProductCard
            imageSrc={p.imageSrc}
            alt={p.alt}
            title={p.title}
            description={p.description}
            textArea={p.textArea}
          />
        </div>
      ))}

      <div className="pt-[40px]"></div>

     {}
      <div className="pt-[40px]"></div>



         <div  className="text-center text-3xl text-[#013a63] font-semibold px-4 md:px-24 leading-relaxed">
           
        <GlassButton  
            text="Learn More "
            size="lg"
            className="bg-[#012a4a] hover:bg-[#01497c] transition text-white font-semibold p-3 rounded-lg"
          onClick={() => window.open ("https://www.sanjiang-security.com/productdetail/conventional%20fire%20alarm%20controller.html")} // تنقل خارجي
          />
          </div>
      <div className="pt-[40px]"></div>

      <h2 className="text-xl font-bold mb-2 text-size-50px text-center">Certificates and licenses</h2>
     <CertificatesGallery/>
      <div className="pt-[40px]"></div>
    
    
      <div className="pt-[40px]"></div>
     

      
     
    </PageContainer>
  );
}

export default Fas;
