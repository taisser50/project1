import { useState } from "react";
import PageContainer from "../components/PageContainer";
import ProductCardsoft from "../components/Productsoft";
import ProductCard from "../components/ProductCardProps";
import GlassButton from "../components/GlassButton";

function SoftwareADT() {
  return (
    <PageContainer>
      <div className="text-center font-bold text-blue-500 text-size-50px">
        <h1 className="text-4xl font-bold text-gray-800 text-[#014f86]">Transform Your Business with ADT software solutions</h1>
        <p className="mt-4 text-lg text-gray-600">Our software solutions are designed to meet your needs.</p>
      </div>
      <div className="pt-[30px]"></div>
      <div className="grid md:grid-cols-3 gap-6">
        <ProductCardsoft
          image="images/ourwork/software/vip.png"
          title="System VIP Software"
          link="#vip-software"
        />
        <ProductCardsoft
          image="images/ourwork/software/service.png"
          title="Service Software"
          link="#service-software"
        />
        <ProductCardsoft
          image="images/ourwork/software/sales.png"
          title="Sales Software"
          link="#sales-software"
        />
        <ProductCardsoft
          image="images/ourwork/software/accounte.png"
          title="Accounting Software"
          link="#accounting-software" 
        />
        <ProductCardsoft
          image="images/ourwork/software/parking.png"
          title="Parking Software"
          link="#parking-software"
        />
        <ProductCardsoft
          image=" images/ourwork/software/warehouse.png"
          title="Warehouse Software"
          link="#warehouse-software"
        />
      </div>
      <div className="pt-[30px]"></div>

      
      <div id="vip-software" className="my-10 p-6 bg-gray-100 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800">System VIP Software Details</h2>
        <p className="mt-2 text-gray-700">Detailed information about the System VIP software...</p>
      </div><div className="pt-[30px]"/>

      <div id="service-software" className="my-10 p-6 bg-gray-100 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800">Service Software Details</h2>
        <p className="mt-2 text-gray-700">Detailed information about the Service software...</p>
      </div><div className="pt-[30px]"/>

      <div id="sales-software" className="my-10 p-6 bg-gray-100 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800">Sales Software Details</h2>
        <p className="mt-2 text-gray-700">Detailed information about the Sales software...</p>
      </div><div className="pt-[30px]"/>

      <div id="accounting-software" className="my-10 p-6 bg-gray-100 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800">Accounting Software Details</h2>
        <p className="mt-2 text-gray-700">Detailed information about the Accounting software...</p>
      </div><div className="pt-[30px]"/>

      <div id="parking-software" className="my-10 p-6 bg-gray-100 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800">Parking Software Details</h2>
        <p className="mt-2 text-gray-700">Detailed information about the Parking software...</p>
        <ProductCard imageSrc={"images/parking dahua.png"} alt={"System Parking Software"} title={"ANPR DAHUA"} description={"The parking program is available for download as a demo, please purchase a license after 72 hours."} textArea={"v 5.6.1"}
              /><div className="pt-[20px]"/>
              <GlassButton  text="Download Software DAHUA"
            size="lg"
            className="bg-[#01497c] hover:bg-[#01497c] transition text-white font-semibold p-3 rounded-lg shadow-lg hover:shadow-xl duration-300 ease-in-out center"
          onClick={() => {
    fetch("http://localhost:5000/folder/ADT-Parking-DAHUA_v5.6.1.rar", {
      method: "GET",
      headers: {
        "x-api-key": "12345"
      }
    })
      .then(response => {
        if (!response.ok) throw new Error("Download failed");
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "ADT-Parking-DAHUA_v5.6.1.rar"; // اسم الملف عند التحميل
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch(err => alert(err.message));
  }}
/>
      <div className="pt-[30px]"/>
       
        <div className="pt-[30px]"/>
        <ProductCard imageSrc={"images/PARKING HIKVISION.png"} alt={"System Parking Software"} title={"ANPR HIKVISION"} description={"The parking program is available for download as a demo, please purchase a license after 72 hours."} textArea={"v 4.4.1"}/>
        <div className="pt-[20px]"/>
        <GlassButton  text="Download Software HIKVISION"
            size="lg"
            className="bg-[#01497c] hover:bg-[#01497c] transition text-white font-semibold p-3 rounded-lg shadow-lg hover:shadow-xl duration-300 ease-in-out center"
           onClick={() => {
    fetch("http://localhost:5000/folder/ADT-Parking-HIKVISION_v5.rar", {
      method: "GET",
      headers: {
        "x-api-key": "12345"
      }
    })
      .then(response => {
        if (!response.ok) throw new Error("Download failed");
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "ADT-Parking-HIKVISION_v5.rar"; // اسم الملف عند التحميل
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch(err => alert(err.message));
  }}
/>
<div className="pt-[30px]"/>
  
      </div><div className="pt-[30px]"/>
      
      <div id="warehouse-software" className="my-10 p-6 bg-gray-100 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800">Warehouse Software Details</h2>
        <p className="mt-2 text-gray-700">Detailed information about the Warehouse software...</p>
               <div className="pt-[20px]"/>
               
               <ProductCard imageSrc={"images/ourwork/software/warhousesys.png"} alt={"Warhouse"} title={"Warehousing System"} description={"Contact the company for more information."} textArea={"Warehouse"}/>
            
               <div className="pt-[20px]"/>
            <GlassButton  text="Learn more"
            size="lg"
            className="bg-[#01497c] hover:bg-[#01497c] transition text-white font-semibold p-3 rounded-lg shadow-lg hover:shadow-xl duration-300 ease-in-out center"
           onClick={() => {"/contactus"}}/>
      </div><div className="pt-[30px]"/>

    </PageContainer>
  );
}

export default SoftwareADT;