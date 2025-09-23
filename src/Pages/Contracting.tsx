import React from "react";
import PageContainer from "../components/PageContainer";
import ProductCard from "../components/ProductCardProps";



const products = [
  {
    imageSrc: "images/ourwork/ourservices/servis1.png",
    alt: "Contracting Services",
    title: "CCTV Surveillance Systems",
    description: `Our state-of-the-art CCTV surveillance systems provide round-the-clock monitoring and security for your premises. With high-definition video feeds and advanced analytics, you can keep an eye on your property from anywhere, ensuring peace of mind for you and your stakeholders.`,
    textArea: `Our Services Include:`
  },
    {
    imageSrc: "images/ourwork/ourservices/servis2.png",        
    alt: "Contracting Services",
        
    title: "Intercom Solutions",
    description: ` Our intercom solutions facilitate seamless communication within your facility. Whether for personal use or large-scale operations, our systems enable easy and effective communication, enhancing security and convenience for everyone involved. `,
    textArea: `Our Services Include:`
    },
        {
    imageSrc: "images/ourwork/ourservices/servis3.png",
    alt: "Contracting Services",
    title: "Fire Alarm Systems",
    description: `Protect your property and its occupants with our reliable fire alarm systems. Designed to detect smoke and fire at the earliest stages, our systems ensure swift alerts and swift responses, minimizing potential damage and safeguarding lives.`,
    textArea: `Our Services Include:`
  },
      {
    imageSrc: "images/ourwork/ourservices/servis4.png",
    alt: "Contracting Services",
    title: "Access Control Systems",
    description: ` Our access control solutions empower you to manage and restrict entry to various areas of your property. With advanced technology such as key cards and biometric scanning, you can ensure that only authorized personnel have access to sensitive locations, enhancing overall security. `,
    textArea: `Our Services Include:`
  },
    {
    imageSrc: "images/ourwork/ourservices/servis5.png",
    alt: "Contracting Services",
    title: "Time Attendance Solutions",
    description: `Efficiently track employee working hours with our comprehensive time and attendance solutions. Our systems streamline the process of recording attendance, making payroll easier and more accurate while ensuring that you stay compliant with labor regulations. . `,
    textArea: `Our Services Include:`
  } , {
    imageSrc: "images/ourwork/ourservices/servis6.png",
    alt: "Contracting Services",
    title: "Server Solutions",
    description: `  Our reliable server solutions provide the backbone for your business operations. With robust performance and security, our servers are designed to handle your data needs, ensuring that your critical applications run smoothly and efficiently.  `,
    textArea: `Our Services Include:`
  },  {
    imageSrc: "images/ourwork/ourservices/servis7.png",
    alt: "Contracting Services",
    title: "Network Infrastructure",
    description: ` A strong network infrastructure is crucial for today's fast-paced business environment. Our network solutions guarantee reliable connectivity, enabling your operations to function seamlessly and supporting your growth with scalable and secure options.  `,
    textArea: `Our Services Include:`
  } , {
    imageSrc: "images/ourwork/ourservices/servis8.png",
    alt: "Contracting Services",
    title: "Fiber Optic Technology",
    description: ` Experience lightning-fast data transmission with our fiber optic technology. This cutting-edge solution offers superior bandwidth and speed, making it ideal for businesses that demand high performance and reliability in their network connections `,
    textArea: `Our Services Include:`
  },  
  
  {
    imageSrc: "images/ourwork/ourservices/servis9.png",
    alt: "Contracting Services",
    title: "Building Solutions Technology",
    description: ` Construction Technology - Innovation in smart buildings, automation in construction.

Software solutions for construction - Project management software, AI-based scheduling tools, etc.

IT solutions for businesses - Custom software, cloud solutions or digital transformation for companies across industries. `,
    textArea: `Our Services Include:`
  }
];
function Contracting() {
    return (
        <PageContainer>
        <div className="text-center font-bold text-blue-500 text-size-50px">
            <h1 className="text-4xl font-bold text-gray-800 text-[#014f86]">Transform Your Business with ADT</h1>
            <p className="mt-4 text-lg text-gray-600">Our contracting services are designed to meet your needs.</p> 
        </div>
        <div className="pt-[20px]"></div>
        {products.map((product, index) => (
             <div key={index} className="pt-[40px] text-center text-size-30px">
          <ProductCard
            key={index}
            imageSrc={product.imageSrc}
            alt={product.alt}
            title={product.title}
            description={product.description}
            textArea={product.textArea}
          />
        </div>
        ))}
    </PageContainer>
    );
}

export default Contracting;