import React from "react";
import Header from "../../components/header/Header";

const HeaderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HeaderLayout;
