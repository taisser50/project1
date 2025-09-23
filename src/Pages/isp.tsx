import React, { useState } from "react";
import PageContainer from "../components/PageContainer";
import TextSection from "../components/TextSection";
import ProductCardProps from "../components/ProductCardProps";

function Isp() {
    return(
      <PageContainer>             
            <TextSection  title="Internet Service Provider" subtitle="Our company offers top-tier Internet Service Provider (ISP) solutions in partnership with a range of leading and trusted ISPs. By collaborating with multiple distinguished providers, we ensure that our clients receive:">
      <ul>
        <li className="text-30px">Reliable and high-speed internet connections tailored to their needs.</li>
        <li className="text-30px">Seamless connectivity through advanced technologies including Fiber-to-the-Home (FTTH).</li>
        <li className="text-30px">Flexible options from multiple providers, allowing for the best performance and coverage in every area.</li>
        <li className="text-30px">Professional support and service to maintain consistent uptime and user satisfaction.</li>
      </ul>
       <ProductCardProps imageSrc={"images/ispadt.png"} alt={""} title={"Internet Service Provider "} description={""}></ProductCardProps>
      </TextSection>       

     <div className="p-[70px]"/>
         </PageContainer>   
);
}


export default Isp;