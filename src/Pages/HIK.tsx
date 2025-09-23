import {useState} from "react";
import PageContainer from "../components/PageContainer";
import ProductCardsoft from "../components/Productsoft";
import ProductCard from "../components/ProductCardProps";
import GlassButton from "../components/GlassButton";

function HIK () {
  return (
          
          <PageContainer>
      <div className="text-center font-bold text-blue-500 text-size-50px">
        <h1 className="text-4xl font-bold text-gray-800 text-[#014f86]">Hikvision Products</h1>
        <p className="mt-4 text-lg text-gray-600"> camera, hikvision security system, Kurdistan</p>
      </div>
      <div className="pt-[30px]"></div>
      <div className="grid md:grid-cols-3 gap-6">
        <ProductCardsoft
          image="images/ourwork/HIK/HIKserver.png"
          title="Hikvision Network Switches
          Smart. Solid. Secure."
          link="https://www.hikvision.com/en/products/transmission/Network-Switches/?category=Networking&subCategory=Switches&checkedSubSeries=null"

        />
        <ProductCardsoft
          image="images/ourwork/HIK/HIKdesplay.png"
          title="LCD Video Walls
Each Pixel with High Value"
          link="https://display.hikvision.com/en/products/lcd-video-walls/lcd-video-walls/pro-series/?category=LCD+Video+Walls&subCategory=LCD+Video+Walls&series=Mirror+Series&checkedSubSeries=NONE"
        />
        <ProductCardsoft
          image="images/ourwork/HIK/HIKtouch.png"
          title="Many kind of touch screens"
          link="https://www.hikvision.com/en/products/display-and-control/monitors/commercial-monitor/?category=Display+and+Control&subCategory=Monitors&series=Commercial+Monitor&checkedSubSeries=NONE"
        />
        <ProductCardsoft
          image="images/ourwork/HIK/HIKvideo.png"
          title="LED Modules Expand your vision with infinite flexibility"
          link="https://display.hikvision.com/en/products/led-displays/led-modules/" 
        />
        <ProductCardsoft
          image="images/ourwork/HIK/HIKcamera.png"
          title="DeepinView-Series Cameras Deeper intelligence beyond the edge"
          link="https://www.hikvision.com/en/products/IP-Products/Network-Cameras/?category=Network+Products&subCategory=Network+Cameras&checkedSubSeries=null"
        />
        <ProductCardsoft
          image=" images/ourwork/HIK/HIKsound.png"
          title="Audio Products Smarter audio, made easy"
          link="https://www.hikvision.com/en/products/audio-and-sensing/audio-products/?category=Audio+and+Sensing&subCategory=Audio+Products&checkedSubSeries=null"
        />
         <ProductCardsoft
          image=" images/ourwork/HIK/HIKalarm.png"
          title="Meet the AX PRO Wireless Alarm System"
          link="https://www.hikvision.com/en/products/Alarm-Products/wireless-intrusion-alarm/ax-pro/?category=Alarm&subCategory=Wireless+Intrusion+Alarm&series=AX+PRO&checkedSubSeries=NONE"
        /> <ProductCardsoft
          image=" images/ourwork/HIK/HIKbarrer.png"
          title="Barrier Gates
Lift the barrier to efficient, tailored vehicle access managemen"
          link="https://www.hikvision.com/en/products/parking-management/vehicle-access-control-management/barrier-gates/?category=Parking+Management&subCategory=Vehicle+Access+Control+Management&series=Barrier+Gates&checkedSubSeries=NONE"
           />
           <ProductCardsoft
          image=" images/ourwork/HIK/HIKwirrles.png"
          title="Explore Hikvision networking"
          link="https://www.hikvision.com/en/products/transmission/?category=Networking&checkedSubSeries=null"
           />
           
      </div>
      <div className="pt-[30px]"></div>
  <div className="text-center font-bold text-blue-500 text-size-50px">
        <h1 className="text-4xl font-bold text-gray-800 text-[#014f86]">DAHUA  products </h1>
        <p className="mt-4 text-lg text-gray-600">camera, security system, Kurdistan</p>
        <div className="pt-[30px]"/>
      </div>
       <div className="grid md:grid-cols-3 gap-6">
          <ProductCardsoft
          image=" images/ourwork/HIK/DAHcamera.png"
          title="Network camera"
          link="https://www.dahuasecurity.com/Products/All-Products/Network-Cameras"/>
          <ProductCardsoft
          image=" images/ourwork/HIK/DAHhdcv.png"
          title="HDCVI Camera"
          link="https://www.dahuasecurity.com/Products/All-Products/HDCVI-Cameras"/>
          <ProductCardsoft
          image=" images/ourwork/HIK/DAHaccess.png"
          title="Access control"
          link="https://www.dahuasecurity.com/Products/All-Products/Access-Control--Time-Attendance"/> 
          <ProductCardsoft
          image=" images/ourwork/HIK/DAHstorage.png"
          title="Storage"
          link="https://www.dahuasecurity.com/products/All-Products/Storage/IP-Storage"/> 
          <ProductCardsoft
          image=" images/ourwork/HIK/DAHinter.png"
          title="DAHUA Video Intercoms"
          link="https://www.dahuasecurity.com/Products/All-Products/Video-Intercoms"/>
           <ProductCardsoft
          image=" images/ourwork/HIK/DAHdisplay.png"
          title="Display"
          link="https://display.dahuasecurity.com/business/en"/> 
          <ProductCardsoft
          image=" images/ourwork/HIK/DAHparking.png"
          title="PARKING Managment"
          link="https://www.dahuasecurity.com/products/All-products/Intelligent-Traffic/Smart-Parking-Products/Indoor-Parking"/>
          

</div>
<div className="pt-[30px]"></div>
  <div className="text-center font-bold text-blue-500 text-size-50px">
        <h1 className="text-4xl font-bold text-gray-800 text-[#014f86]">EZVIZ  products </h1>
        <p className="mt-4 text-lg text-gray-600">camera, security system, Kurdistan</p>
        <div className="pt-[30px]"/>
      </div>
           <div className="grid md:grid-cols-3 gap-6">
        <ProductCardsoft
          image=" images/ourwork/HIK/EZVsmart.png"
          title="Smart Home
Extend security and comfort throughout your home with EZVIZ smart home appliances."
          link="https://www.ezviz.com/category/smart-home"/>
          
       <ProductCardsoft
          image=" images/ourwork/HIK/EZVcamera.png"
          title="Security Cameras
Worry-free and hassle-free home protection 24/7"
          link="https://www.ezviz.com/category/security-wifi-cameras"/>
          </div>
    </PageContainer>
  );
}


export default HIK;

