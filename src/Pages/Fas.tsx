import React, { useState } from "react";
import PageContainer from "../components/PageContainer";
import { motion, AnimatePresence } from "framer-motion";
import GlassButton from "../components/GlassButton";
import CertificatesGallery from "../components/CertificatesGallery";
import ProductCard from "../components/ProductCardProps";
import { MarqueeImage, ThreeDMarquee } from "../components/ThreeDImageRing";
import ExpandableText from "../components/ExpandableText";
import ExpandableSection from "../components/ExpandableText";



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

const sections = [
  {
    previewText: "Learn more about Fire alarm control panel SEC1000",
    imageSrc: "/images/ourwork/fireAlarm/lpcb.png",
    imageSrc2: "/images/ourwork/fireAlarm/ce.png",
    title: "Fire Alarm Panel SEC1000",
    description: `Product features
Up to 120 addresses on one loop.

The loop supports class A and Class B types.

An easy to read, 4.3"color screen LCD with a resolution of 480×272.

Zone indicators for 16 zones gives a quick indication of the location of an alarm.

Record capacity of 1000 historical events for each of historical fire, historical fault and historical operation.

An independently programmable conventional sounder circuit output.

Integral power supply and battery.

Flexible and intuitive cause and effect programming on front panel.

Zone test, point test and module start/stop testing facilitate the commissioning.

U-disk interface makes the load and save of configuration or historical data convenient for system commissioning and maintenance.

Hierarchy management with three access levels.

Anti-tamper protection by a key lock.

CAN bus for interconnection of up to 20 FACPs.
The purpose of the SEC1000 Fire Alarm Control Panel (FACP) is to monitor input signals, give indications and possibly activate outputs as programmed. It is designed to comply with EN 54-2 with qualities of simple installation, operation and easy maintenance. 



The SEC1000 panel is an addressable fire detection panel with 1 loop of 120 addressable points and expansion capabilities. It is compatible with other peripherals made by Sanjiang with its own protocol.

`,
  },
  {
    previewText: "Learn more about Fire alarm control panel SEC3008",
    imageSrc: "/images/ourwork/fireAlarm/applus.png",
    imageSrc2: "/images/ourwork/fireAlarm/ce.png",
    title: "panel SEC3008",
    description: `EN54-2&EN54-4 certified by LPCB and Applus

7.0 inch color touch-sensitive screen LCD, resolution of 800×480.

324 addresses for 1 loop，max 8 loops.

A maximum of 5000 fire protection zones are supported.More user-friendly Night Mode Time Range Settings.

Networkable: CAN bus for interconnection of up to 60 FACPs and Ethernet for up to 254 FACPs.

Fire alarm, fault, C&E and operation, each category can store up to 10000 records.
The SEC3008 control panels are touch-sensitive, addressable fire detection panels, with up to 8 circuits for the SEC3004, each panel supporting up to 324 addressable points, and are designed to meet the requirements of the EN 54-2 & EN 54-4 standards for simple installation, easy operation and easy maintenance.The SEC3004 control panels are touch-sensitive, addressable fire detection panels, with up to 4 circuits for the SEC3004, each panel supporting up to 324 addressable points, and are designed to meet the requirements of the EN 54-2 & EN 54-4 standards for simple installation, easy operation and easy maintenance.`,
  },
  {
    previewText: "Learn more about Fire alarm control panel SEC3004",
    imageSrc: "/images/ourwork/fireAlarm/applus.png",
    imageSrc2: "/images/ourwork/fireAlarm/ce.png",
    title: "panel SEC3004",
    description: `EN54-2&EN54-4 certified by LPCB and Applus.

7.0 inch color touch-sensitive screen LCD, resolution of 800×480.

324 addresses for 1 loop，max 4 loops.

A maximum of 5000 fire protection zones are supported.More user-friendly Night Mode Time Range Settings.

Networkable: CAN bus for interconnection of up to 60 FACPs and Ethernet for up to 254 FACPs.

Fire alarm, fault, C&E and operation, each category can store up to 10000 records`,
  },

   {
    previewText: "Learn more about Addressable Photoelectric Smoke Detector A9030T",
    imageSrc: "/images/ourwork/fireAlarm/lpcb.png",
    imageSrc2: "/images/ourwork/fireAlarm/ce.png",
    title: "Addressable Photoelectric Smoke Detector A9030T",
    description: `Product features
LPCB & CPR approval

It supports soft addressing and rewriting the address via coder in situ

Within a single-chip microcomputer, it can process the sampling data in real-time, save the latest 144 historical data and realize a curve tracing for the field situation  
A9030T point-type photoelectric smoke detector (Detector hereunder) is a kind of photoelectric smoke detector. With an internal microprocessor, it supports electronic coding and is accessed through a compatible fire alarm control panel via a two-wire bus. The detector realizes real-time acquisition of the in situ smoke concentration data and sends back the data to a fire alarm control panel. It can also receive and execute the control commands given by a fire alarm control panel.

The detector is suitable for such industrial and civil buildings that have a great deal of smoke during fires but no smoke under normal circumstances, such as restaurants, hotels, teaching buildings, office buildings, computer rooms, communication machine rooms, libraries and archives. It is not suitable for places with a great deal of retained dust and water mist, places where steam and/or oil mist may be generated and places with retained smoke under normal circumstances.
`,
  }, 
  
  {
    previewText: "Learn more about Addressable Optical Smoke and Heat Multisensor Detector A9036T",
    imageSrc: "/images/ourwork/fireAlarm/lpcb.png",
    imageSrc2: "/images/ourwork/fireAlarm/ce.png",
    title: "Addressable Optical Smoke and Heat Multisensor Detector A9036T",
    description: `Product features
The low profile design of the Optical/Heat Multisensor detector Detector is sleek and evolutionary, with a 360° LED indicator which illuminates red when in alarm. 

Non-polarity, two-bus connection that ensures convenient installation and maintenance.

It can realize electronic coding and rewrite the address via coder in site.

Within a single-chip MCU, it can realize real-time data acquisition and processing, realize a curve tracing for the field situation.

It has a temperature, humidity and dust accumulation drift compensation function and a sensor fault detection function (fault reporting to fire alarm control panel).

A sophisticated dynamic algorithm, providing transient rejection and compensation for drift whilst maintaining accurate sensitivity. 

The A9036T point composite smoke and temperature fire detector (hereinafter referred to as the detector) is composed of a smoke sensor and dual heat sensors. It not only has the performance of photoelectric smoke fire detector, but also has the performance of heat detector.The detector is made of non-polar two bus, which can be used with fire alarm control panel produced by our company.
`,
  },
  
  {
    previewText: "Learn more about Manual Call Point A9060T",
    imageSrc: "/images/ourwork/fireAlarm/lpcb.png",
    imageSrc2: "/images/ourwork/fireAlarm/ce.png",
    title: "Manual Call Point A9060T",
    description: `Product features
LPCB and CPR approval.

Semi-flush or surface mount.

Lever reusable (non-glass break).

LED indicator.
The A9060T manual call point(hereinafter referred to A9060T) is mainly designed to be used with an intelligent two-bus control system. If it is pressed after a fire is manually confirmed, an alarm signal may be sent to a fire alarm control system which will, after receiving the alarm signal, display the coded address and the equipment status of the manual fire call points. When the manual fire call point is operating normally, the red indicator will blink; when there is a fire alarm, it will remain lit. The A9060T supports electronic coding, which is more suitable for engineering application convenience.`,
  },


   {
    previewText: "Learn more about Addressable Sounder visual indicator A9091T",
    imageSrc: "/images/ourwork/fireAlarm/lpcb.png",
    imageSrc2: "/images/ourwork/fireAlarm/ce.png",
    title: "Addressable Sounder visual indicator A9091T",
    description: `Product features
Meet both EN54-3 and EN54-23.

Designed with an upper cover and a lower cover and installed on an independent base, it can be installed,debugged and maintained conveniently.

Suitable for wall and ceiling mount application.

Providing 16 tones.

Highly efficient LED technology and specially designed lens.

Light output synchronization.
A9091T Intelligent Sounder Beacon can give audible and visual alarms after being connected to a DC24V power supply and a bus loop. It can be used with a bus-type fire alarm control panel. After receiving a start command given by the fire alarm control panel following an accident, the Sounder Beacon will begin to work. At this moment, the Sounder Beacon will give a dazzling visual alarm signal and a harsh audible alarm signal ,to remind the persons on the scene of the accident , the fact that a fire has occurred on the site ,quickly and necessity to take related evacuation measures, thus preventing the fire accident from becoming a major one.

The Sounder Beacon may be used to give audible alarms and visual alarms at the scenes of accidents. It is applicable to places like high-rise residential buildings, public places, hotels, amusement buildings, factories, shopping centers, hospitals, schools, office buildings and stock exchanges, and particularly to  places with low visibility or the possibility of generation of smoke.
` },

   {
    previewText: "Learn more about Conventional fire alarm control panel SEC3016C",
    imageSrc: "/images/ourwork/fireAlarm/lpcb.png",
    imageSrc2: "/images/ourwork/fireAlarm/ce.png",
    title: "Conventional fire alarm control panel SEC3016C",
    description: `Product features
Up to 16 Zones

Walk test function 

Disablement facility for zones & sounders 

Space for up to 7Ah batteries 

Sounder delay option 

4 sounder circuits 

Two sounder circuits can be configured as Aux 24V supplies 

Supports Repeater communication interface

Meets all requirements of EN 54-2&4
The SEC3016C is a versatile fire alarm control panel fully compliant with EN54-2&4 standards. It supports flexible configurations of 2/4/8/12/16 zones, with each zone accommodating up to 32 detectors. Additionally, the controller offers four sounder alarm outputs, highlighting its robust load capacity. The enclosure is made of a combination of metal and high-strength flame-retardant ABS material, ensuring reliability andenhanced safety while minimizing secondary fire risks. Featuring a simplified two-wireconnection design, the SEC3016C significantly reduces wiring complexity, making itideal for small to medium-sized applications.
`
},



 {
    previewText: "Learn more about Conventional heat detector C9021T",
    imageSrc: "/images/ourwork/fireAlarm/lpcb.png",
    imageSrc2: "/images/ourwork/fireAlarm/ce.png",
    title: "Conventional heat detector C9021T",
    description: `Product features
Designed with an upper cover and a lower cover, it can be installed, debugged and maintained conveniently. 

Real-time monitoring to accurately determine ambient temperature conditions in protected areas. 

Non-addressable， non-polarity, two-bus connection that ensures convenient installation and maintenance.
C9021T point-type Conventional Heat Detector (Detector hereunder) is a two-wire switch-type temperature-sensing detector.It is compatible inconventional fire alarm control panel. The detector is applicable in places where fire might generate volume heat.e.g. in industrial and civil buildings such as in the kitchen, boiler room,generator room, drying plant, and smoking room. However, it is not suitablefor places where volume smoke and low heat is generated during a fire, or a place where a smoldering fire might occur.`
},


 {
    previewText: "Learn more about Conventional SMOKE DETECTOR C902OT",
    imageSrc: "/images/ourwork/fireAlarm/lpcb.png",
    imageSrc2: "/images/ourwork/fireAlarm/ce.png",
    title: "Conventional SMOKE DETECTOR C902OT",
    description: `Product features
Up to 16 Zones

Walk test function 

Disablement facility for zones & sounders 

Space for up to 7Ah batteries 

Sounder delay option 

4 sounder circuits 

Two sounder circuits can be configured as Aux 24V supplies 

Supports Repeater communication interface

Meets all requirements of EN 54-2&4
The SEC3016C is a versatile fire alarm control panel fully compliant with EN54-2&4 standards. It supports flexible configurations of 2/4/8/12/16 zones, with each zone accommodating up to 32 detectors. Additionally, the controller offers four sounder alarm outputs, highlighting its robust load capacity. The enclosure is made of a combination of metal and high-strength flame-retardant ABS material, ensuring reliability andenhanced safety while minimizing secondary fire risks. Featuring a simplified two-wireconnection design, the SEC3016C significantly reduces wiring complexity, making itideal for small to medium-sized applications.`

},


 {
    previewText: "Learn more about Conventional manual call point C9060T",
    imageSrc: "/images/ourwork/fireAlarm/lpcb.png",
    imageSrc2: "/images/ourwork/fireAlarm/ce.png",
    title: "Conventional manual call point C9060T",
    description: `Product features
Designed with an upper cover and a lower cover, it can be installed, debugged and maintained conveniently. 

Multiple can be used in parallel, and the terminal load must be connected at the end.

The pressing sheet on the manual fire alarm call point will not get crushed after it is pressed, but can be reset by a special tool, so it can be used repeatedly.
C9060T is a conventional manual call point (hereinafter referred to MCP), When the manual call point is operating normally,the light is non-luminance. If it is pressed after a fire is manually confirmed, the indicator will remain lit.

`
},


 {
    previewText: "Learn more about Conventional Sounder Beacon C9092T",
    imageSrc: "/images/ourwork/fireAlarm/lpcb.png",
    imageSrc2: "/images/ourwork/fireAlarm/ce.png",
    imageSrc3: "/images/ourwork/fireAlarm/f15.png",

    title: "Conventional Sounder Beacon C9092T",
    description: `Product features
Choice of up to   tone modes.

Adopting independent base, it is simple and convenient for installation, commissioning and maintenance.

The light display adopts multiple ultra-high brightness light-emitting diodes as the light source, with eye-catching display,long life and low power consumption.

Tamper-evident function is possible.
C9092T Conventional Sounder Beacon is a product that is used in conjunction with the Conventional fire alarm controller produced by our Company.The Sounder Beacon may be used to give audible alarms at the scenes of accidents. It is applicable to places like high-rise residential buildings, public places, hotels, amusement buildings, factories, shopping centers, hospitals, schools, office buildings and stock exchanges, and particularly to the places with a low visibility or the possibility of generation of smoke.
`
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
       <img src="/logosnaj.png"/>
      <h5 className="text-center font-bold text-blue-500 text-size-50px">SANJIANG</h5>
       <h2 className="text-xl font-bold mb-2 text-size-50px text-center">Fire Alarm System</h2>
       <div className="pt-[20px]"></div>
       <div  className="text-center text-3xl text-[#013a63] font-semibold px-4 md:px-24 leading-relaxed"> 
        <GlassButton  
            text="Learn More on site sanjiang"
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
                    
             <div className="pt-[40px]" />
        </div >
      ))}

      <div className="pt-[40px]"></div>
    <div className="space-y-6">
  {sections.map((item, index) => (
    <ExpandableSection
      key={index}
      previewText={item.previewText}
      className="h-auto w-auto mx-auto"
      contentClassName="grid md:grid-cols-2 gap-4 items-center"
      buttonClassName="bg-blue-100 px-3 py-1 rounded-lg"
    >
      <div className="grid md:grid-cols-3 gap-6">
        <img
        src={item.imageSrc}
        alt={item.title}
        className="w-auto h-auto rounded-lg"
      />
       <img
        src={item.imageSrc2}
        alt={item.title}
        className="w-auto h-auto rounded-lg"
      />
       <img src={item.imageSrc3}
         alt={item.title}
        className="w-auto h-auto rounded-lg"
       />
      </div>
      
      <div className="space-y-2">
        <h3 className="font-bold text-lg">{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </ExpandableSection>
  ))}
</div>
<div className="p-[20px]"/>
            <div  className="text-center text-3xl text-[#013a63] font-semibold px-4 md:px-24 leading-relaxed">
           
        <GlassButton  
            text="Learn More on site sanjiang"
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
