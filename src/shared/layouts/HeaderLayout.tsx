import Header from "@/components/header/Header";
import React from "react";


const HeaderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HeaderLayout;
