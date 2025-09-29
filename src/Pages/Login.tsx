import React from "react";
import PageContainer from "../components/PageContainer";
import LOGIN from "../components/LOGIN";
import LOGIN1 from "../components/LOGIN1";


function Login  (){

    return (
        <PageContainer>
            <h1 className=" font-bold text-center text-5xl text-[#013a63]">Welcome to our website</h1>
            <div className="pt-[20px]"></div>
            <h3 className=" font-bold text-center text-2xl text-[#013a63]">We are very excited to have you as one of our distinguished customers. </h3>
            <div className="pt-[10px]"></div>
            <LOGIN1/>
        </PageContainer>

    );


}

export default Login;