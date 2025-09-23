import React from "react";

function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-[80px] px-4 md:px-10">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6 ">
        <div >
        {children}
        </div>
      </div>
    </div>
  );
}

export default PageContainer;