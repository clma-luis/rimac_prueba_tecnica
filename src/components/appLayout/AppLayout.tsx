import React, { useEffect, useState } from "react";
import "./appLayoutStyles.scss";
import { useLocation } from "react-router-dom";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const [activeStyles, setactiveStyles] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      setactiveStyles(true);
    } else {
      setactiveStyles(false);
    }
  }, [pathname]);

  return <main className={activeStyles ? "layout" : ""}>{children}</main>;
};

export default AppLayout;
