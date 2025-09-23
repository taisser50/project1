import React from 'react';
import PageContainer from '../components/PageContainer';
import TextSection from '../components/TextSection'; // تأكد من المسار الصحيح

const AboutCo = () => {
  return (
    <PageContainer>
      <TextSection
        title="About Our Company"
        subtitle="Innovative IT Solutions"
      >
        {/*
          تم استبدال <StyledP> بعلامة <p> العادية
          لأن StyledP غير موجودة في هذا الملف
        */}
        <p className="text-center text-[#013a63] mt-4 text-xl leading-relaxed px-4 md:px-24">
          At ADT Company, we specialize in delivering innovative IT solutions tailored to meet your business needs. Our expertise in software development and cloud services ensures that your organization stays ahead in the digital landscape.
        </p>
        <p className="text-center text-[#013a63] mt-4 text-xl leading-relaxed px-4 md:px-24">
          With over 15 years of experience in providing electronic systems and IT solutions, we have worked extensively in government and non-government projects in the Kurdistan Region. Now, by establishing this company, we aim to expand our services in the region and to satisfy you as always. The company's IT projects are carried out by a university team, ensuring reliability and excellence for you.
        </p>
      </TextSection>
    </PageContainer>
  );
};

export default AboutCo;