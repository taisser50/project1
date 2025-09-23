import React from "react";
import PageContainer from "../components/PageContainer";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCardProps";
import TextSection from "../components/TextSection";


const products = [
  {
    imageSrc: "images/adtbarai/adtbarai.png",
    alt: "ADT Barrier Model 1",
    title: "ADT-3033",
    description: `Automatic opening in case of power failure, suitable for unattended 

  parking scenarios.

· Servo motor; adjustable and fast barrier arm lifting speed (as fast as 1 s). · Motor enjoys lifespan of more than 5 million times, suitable for scenes 

  with large traffic volume such as shopping malls and hospitals.

· Anti-smashing function realized by connected radar, coil, or IR sensor.

· Supports remote control, with maximum distance of 50 m (164.04 ft) in 

  open and interference-free environments.

· Automatic lifting when the barrier arm meets obstacle.

· Barrier with 1.5 m (4.92 ft), 3 m (9.84 ft), 3.5 m (11.48 ft) or 4 m

  (13.12 ft) arm supports anti-impact: A turning device is designed 

  between the barrier arm and the main shaft of barrier. The device helps 

  turn the barrier arm away before the arm is impacted.

· Operating temperature: –40°C to +70°C (–40°F to +158°F).

· Operating voltage: AC86–264V.`,
  textArea: "ADT Barrier"
  },
  {
    imageSrc: "images/adtbarai/adtbarai1.png",
    alt: "ADT Barrier Model 2",
    title: "ADT-2023",
    description: `Automatic opening in case of power failure, suitable for unattended 

  parking scenarios.

· Servo motor; adjustable and fast barrier arm lifting speed (as fast as 1 s). · Motor enjoys lifespan of more than 5 million times, suitable for scenes 

  with large traffic volume such as shopping malls and hospitals.

· Anti-smashing function realized by connected radar, coil, or IR sensor.

· Supports remote control, with maximum distance of 50 m (164.04 ft) in 

  open and interference-free environments.

· Automatic lifting when the barrier arm meets obstacle.

· Barrier with 1.5 m (4.92 ft), 3 m (9.84 ft), 3.5 m (11.48 ft) or 4 m

  (13.12 ft) arm supports anti-impact: A turning device is designed 

  between the barrier arm and the main shaft of barrier. The device helps 

  turn the barrier arm away before the arm is impacted.

· Operating temperature: –40°C to +70°C (–40°F to +158°F).

· Operating voltage: AC86–264V.`,
  textArea: "ADT Barrier"
  },
  {
    imageSrc: "images/adtbarai/adtbarai2.png",
    alt: "ADT Barrier Model 3",
    title: "ADT-3033",
    description: `Automatic opening in case of power failure, suitable for unattended 

  parking scenarios.

· Servo motor; adjustable and fast barrier arm lifting speed (as fast as 1 s). · Motor enjoys lifespan of more than 5 million times, suitable for scenes 

  with large traffic volume such as shopping malls and hospitals.

· Anti-smashing function realized by connected radar, coil, or IR sensor.

· Supports remote control, with maximum distance of 50 m (164.04 ft) in 

  open and interference-free environments.

· Automatic lifting when the barrier arm meets obstacle.

· Barrier with 1.5 m (4.92 ft), 3 m (9.84 ft), 3.5 m (11.48 ft) or 4 m

  (13.12 ft) arm supports anti-impact: A turning device is designed 

  between the barrier arm and the main shaft of barrier. The device helps 

  turn the barrier arm away before the arm is impacted.

· Operating temperature: –40°C to +70°C (–40°F to +158°F).

· Operating voltage: AC86–264V.`,

  textArea: "ADT Barrier"
}

];

function ADTBARRIER() {
  return (
    <PageContainer>
       <TextSection
        title="ADT BARRIER"
        subtitle="Automatic Barrier Gate"
      >
       <p className="text-center color-[#013a63] mt-4 text-3xl  leading-relaxed  px-4 md:px-24">
      ADT Barrier is a high-quality automatic barrier gate designed for efficient vehicle access control in various settings, including parking lots, residential complexes, and commercial properties. With its robust construction and advanced features, the ADT Barrier ensures reliable performance and enhanced security.     
        </p>
        <p className="text-center text-[#013a63] mt-4 text-xl leading-relaxed px-4 md:px-24">
       Specifications and Features</p>
      </TextSection>
         <div className="pt-[20px]"></div>
        <div className="pt-[20px]"></div>
        <div className="flex justify-center"></div> 
       
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
    </PageContainer>
    );
}

export default ADTBARRIER;
