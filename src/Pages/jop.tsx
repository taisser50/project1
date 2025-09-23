import React, { useState } from "react";
import PageContainer from "../components/PageContainer";
import GlassButton from "../components/GlassButton";
import JobApplicationForm from "../components/JobApplicationForm";

function Jop() {    
    return (
        <PageContainer>
            <h1 className=" font-bold text-center text-5xl text-[#013a63]">We're Hiring!</h1>
            <div className="pt-[20px]"></div>
            <h3 className=" font-bold text-center text-2xl text-[#013a63]">Join Our Team</h3>
            <p className=" text-center text-lg text-[#013a63]">If you're interested in one of our open positions, start by applying here and attaching your resume.</p>


            <div className="pt-[20px]"></div>
            <JobApplicationForm />
        </PageContainer>

    );
}

export default Jop;