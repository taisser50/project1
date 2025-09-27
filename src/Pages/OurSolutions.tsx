import React from "react";
import PageContainer from "../components/PageContainer";
import { MarqueeImage, ThreeDMarquee } from "../components/ThreeDImageRing";
import PDFViewer from "../components/PDFViewer";
import TextSection from "../components/TextSection";
import ProductCardProps from "../components/ProductCardProps";
import GlassButton from "../components/GlassButton";


const items = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
    { id: 4, title: 'Item 4' },
    { id: 5, title: 'Item 5' },
    { id: 6, title: 'Item 6' },
  ];


const clickableImages: MarqueeImage[] = [
  {
    src: "images/ourwork/ourrwork1/s.jpg",
    alt: "Portfolio Item 0",

  },
  { src: "images/ourwork/ourrwork1/s1.jpg",
    alt: "Portfolio Item 1",
  
  },
  {src: "images/ourwork/ourrwork1/s2.jpg",
    alt: "Portfolio Item 2",
  
  },
  {src: "images/ourwork/ourrwork1/s3.jpg",
    alt: "Portfolio Item 3",
   
  },
  {src: "images/ourwork/ourrwork1/s4.jpg",
    alt: "Portfolio Item 4",
  
  },
  {src: "images/ourwork/ourrwork1/s6.jpg",
    alt: "Portfolio Item 5",
  
  },
  {src: "images/ourwork/ourrwork1/s5.jpg",
    alt: "Portfolio Item 6",
  
  },
  {src: "images/ourwork/ourrwork1/s7.jpg",
    alt: "Portfolio Item 7",
   
  },
  {src: "images/ourwork/ourrwork1/s8.jpg",
    alt: "Portfolio Item 8",
   
  },
  {src: "images/ourwork/ourrwork1/s9.jpg",
    alt: "Portfolio Item 9",
   
  },
  {src: "images/ourwork/ourrwork1/s10.jpg",
    alt: "Portfolio Item 10",
  
  },

  {src: "images/ourwork/ourrwork1/s12.jpg",
    alt: "Portfolio Item 12",
   
  },
  {src: "images/ourwork/ourrwork1/s13.jpg",
    alt: "Portfolio Item 13",
   
  },
  {src: "images/ourwork/ourrwork1/s14.jpg",
    alt: "Portfolio Item 14",
   
  },
  {src: "images/ourwork/ourrwork1/s15.jpg",
    alt: "Portfolio Item 15",
   
  },
  {src: "images/ourwork/ourrwork1/s16.jpg",
    alt: "Portfolio Item 16",
  
  },
  {src: "images/ourwork/ourrwork1/s17.jpg",
    alt: "Portfolio Item 17",
    
  },
  {src: "images/ourwork/ourrwork1/s18.jpg",
    alt: "Portfolio Item 18",
  
  },
  {src: "images/ourwork/ourrwork1/s19.jpg",
    alt: "Portfolio Item 19",
   
  },
  {src: "images/ourwork/ourrwork1/s20.jpg  ",
    alt: "Portfolio Item 20",
   
  },
  {src: "images/ourwork/ourrwork1/s21.jpg",
    alt: "Portfolio Item 21",
  
  },
  {src: "images/ourwork/ourrwork1/s22.jpg",
    alt: "Portfolio Item 22",
  
  },
  {src: "images/ourwork/ourrwork1/s23.jpg",
    alt: "Portfolio Item 23",
   
  },
  {src: "images/ourwork/ourrwork1/s24.jpg",
    alt: "Portfolio Item 24",
   
  },
  {src: "images/ourwork/ourrwork1/s25.jpg",
    alt: "Portfolio Item 25",
   
  },

];

const galleryImages = Array.from({ length: 25 }, (_, i) => ({
  src: `/images/ourwork/ourrwork1/s${i + 1}.jpg`,
  alt: `Gallery image s${i + 1}`,
  href: ``,

}));
 
function OurSolutions() {
  return (
    <PageContainer>  
      <div className="text-center font-bold text-[#013a63] text-size-50px">
       <TextSection title="ADT for creative solutions" subtitle="">
       <p className="text-size-40px">  We offer a wide range of solutions to meet your needs</p>
       </TextSection><div className="p-[30px]"/>
         <div className="grid md:grid-cols-4 gap-10  p-[30px]" >     
        <a href="#Advertising Design"> <GlassButton text="Go to Advertising Design Section" className="text-black"  size="lg" type="button"/></a>
        <a href="#Emergency Power"> <GlassButton text="Go to Emergency Power Section" className="text-black"  size="lg" type="button"/></a>
        <a href="#PARKING MANAGMENT"> <GlassButton text="Go to Parking Managment Section" className="text-black"  size="lg" type="button"/></a>
        <a href="#IP PHONE"> <GlassButton text="Go to IP PHONE Section" className="text-black"  size="lg" type="button"/></a>
         </div> 
         <div className="grid md:grid-cols-3 gap-10 justify-center"> 
        <a href="#Website Design"> <GlassButton text="Go to Website Design Section" className="text-black"  size="lg" type="button"/></a>
        <a href="#PDF"> <GlassButton text="Go to PDF section" className="text-black"  size="lg" type="button"/></a>
        <a href="#Our works"> <GlassButton text="Go to Our works Section" className="text-black"  size="lg" type="button"/></a>
        </div>
   
      <div id="Advertising Design">
      <div className="p-[40px]"/>
      <TextSection  title="Advertising Design" subtitle="We are a leading IT company providing advanced solutions to businesses worldwide. Our services include web development, mobile app development, cloud solutions, advertising design, etc. Let us help you take your business to the next level.">
           <ProductCardProps imageSrc={"images/advert.png"} alt={""} title={"Advertising Design"} description={""}></ProductCardProps>
      </TextSection>

       <div className="p-[40px]"/></div>
       <div id="Emergency Power">
       <TextSection title="Emergency Power" subtitle="We are a leading IT company providing advanced solutions to businesses worldwide. Our services include web development, mobile app development, cloud solutions, advertising design, etc. Let us help you take your business to the next level.">     
            <ProductCardProps imageSrc={"images/apanle.png"} alt={""} title={"Solar Panel"} description={"At ADT, our purpose is to empower businesses through technology. We strive to deliver innovative solutions that enhance productivity and drive growth."}></ProductCardProps>
       </TextSection>  
       <div className="p-[40px]"/>
       <TextSection title="Emergency Power" subtitle="We are a leading IT company providing advanced solutions to businesses worldwide. Our services include web development, mobile app development, cloud solutions, advertising design, etc. Let us help you take your business to the next level.">     
            <ProductCardProps imageSrc={"images/inv.png"} alt={""} title={"Inverter"} description={"We offer a full suite of IT services, including infrastructure support and data management. Our expertise helps businesses leverage technology effectively."}></ProductCardProps>    
       </TextSection>
       <div className="p-[40px]"/>
       <TextSection title="Emergency Power" subtitle=" We are a leading IT company providing advanced solutions to businesses worldwide. Our services include web development, mobile app development, cloud solutions, advertising design, etc. Let us help you take your business to the next level.">     
            <ProductCardProps imageSrc={"images/ups.png"} alt={""} title={"UPS"} description={"Our team at ADT is composed of highly skilled professionals committed to excellence. We work collaboratively to deliver solutions that align with our clients' goals."}></ProductCardProps>
       </TextSection>
      </div>

       <div className="p-[40px]"/>
       <div id="PARKING MANAGMENT">
       <TextSection title="PARKING MANAGMENT" subtitle="We are a leading IT company providing advanced solutions to businesses worldwide. Our services include web development, mobile app development, cloud solutions, advertising design, etc. Let us help you take your business to the next level.">
                  <ProductCardProps imageSrc={"images/anpr.png"} alt={""} title={"ANPR"} description={"ADT has been serving the IT community for over a decade, helping businesses achieve their goals through technology. Our journey is marked by innovation and growth. parking management"}></ProductCardProps>
        </TextSection>  
       <div className="p-[40px]"/> 
       <TextSection title="PARKING MANAGMENT" subtitle="We are a leading IT company providing advanced solutions to businesses worldwide. Our services include web development, mobile app development, cloud solutions, advertising design, etc. Let us help you take your business to the next level.">     
          <ProductCardProps imageSrc={"images/gate.png"} alt={""} title={"Electric Door Gate"} description={"At ADT, our mission is to deliver innovative IT solutions that drive success for our clients. We are committed to providing exceptional service and cutting-edge technology to help businesses thrive."}></ProductCardProps>
       </TextSection>
       <div className="p-[40px]"/>
       <TextSection title="PARKING MANAGMENT" subtitle="We are a leading IT company providing advanced solutions to businesses worldwide. Our services include web development, mobile app development, cloud solutions, advertising design, etc. Let us help you take your business to the next level.">     
            <ProductCardProps imageSrc={"images/adtbarai/adtbarai1.png"} alt={""} title={"BARRIER"} description={"At ADT, our mission is to deliver innovative IT solutions that drive success for our clients. We are committed to providing exceptional service and cutting-edge technology to help businesses thrive., parking management"}></ProductCardProps>
       </TextSection>
       </div>

       <div className="p-[40px]"/>
       <div id="IP PHONE">
       <TextSection title="IP PHONE" subtitle="We are a leading IT company providing advanced solutions to businesses worldwide. Our services include web development, mobile app development, cloud solutions, advertising design, etc. Let us help you take your business to the next level.">
                  <ProductCardProps imageSrc={"images/viop.png"} alt={""} title={"VOIP"} description={"At ADT, we specialize in providing innovative IT solutions tailored to your business needs. Our team is dedicated to harnessing technology to drive efficiency and growth."}></ProductCardProps>
        </TextSection>  
       <div className="p-[40px]"/> 
       <TextSection title="IP PHONE" subtitle="We are a leading IT company providing advanced solutions to businesses worldwide. Our services include web development, mobile app development, cloud solutions, advertising design, etc. Let us help you take your business to the next level.">     
          <ProductCardProps imageSrc={"images/call.png"} alt={""} title={"CALL CENTER"} description={"At ADT, we believe in a client-centric approach that prioritizes your goals. Our solutions are designed to fit seamlessly into your existing processes, enhancing productivity and satisfaction."}></ProductCardProps>
       </TextSection>
       <div className="p-[40px]"/>
       <TextSection title="IP PHONE" subtitle="We are a leading IT company providing advanced solutions to businesses worldwide. Our services include web development, mobile app development, cloud solutions, advertising design, etc. Let us help you take your business to the next level.">     
            <ProductCardProps imageSrc={"images/ecom.png"} alt={""} title={"E-Commerce Development"} description={"Launch your online shop with ADT. Our e-commerce solutions are designed to provide you with a robust platform that drives sales and improves customer engagement."}></ProductCardProps>
       </TextSection>
      </div>
       <div className="p-[40px]"/>

       <div id="Website Design">
     <TextSection title="Creative Website Design Solutions for Your Business" subtitle="">  
     <ul>
        <li className="text-30px">Visually stunning designs that capture attention.</li>
        <li className="text-30px">Seamless user experiences for easy navigation and engagement.</li><li className="text-30px">Professional and trustworthy layouts optimized across all devices.</li>
     </ul>
      <p className="text-center text-[#013a63] mt-4 text-xl leading-relaxed px-4 md:px-24"> Let us bring your vision to life with unique design concepts tailored to impress your audience and elevate your brand.
                     We’re excited to share our creative solutions with you! </p>
       <ProductCardProps imageSrc={"images/webd.png"} alt={""} title={"Web Design"} description={""}></ProductCardProps>
     </TextSection>
     </div>
     <div className="p-[30px]">
     <div className="grid md:grid-cols-2 gap-6" id="PDF">
     <PDFViewer 
        pdfUrl="/nice.pdf" 
        title="ELECTRIC GATE SOLUTION" 
      />

     <PDFViewer 
        pdfUrl="/hikSolution.pdf" 
        title="Hikvision solution" 
      />
     <PDFViewer 
        pdfUrl="/Smart-Apartment.pdf" 
        title="APARTMENT SOLUTION" 
      />
      <PDFViewer 
        pdfUrl="/Smart-Parking.pdf" 
        title="PARKING SOLUTIONS" 
      />
      </div>
      </div>
      <div className="pt-[30px]"></div>

      <div className="pt-[30px]"></div>
        <h2 className="text-xl font-bold mb-2 text-size-50px text-center">Our works</h2>
      <div className="pt-[30px]"></div>
      <div id="Our works">
      <ThreeDMarquee images={clickableImages} className="flex w-full h-full items-center justify-center"/>
       <div className="pt-[70px]"></div></div>
    </div>
    </PageContainer>


  );
}

export default OurSolutions;
