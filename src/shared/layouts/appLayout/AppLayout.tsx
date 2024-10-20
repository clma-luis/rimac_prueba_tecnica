import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./appLayoutStyles.scss";

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

  return <div className={activeStyles ? "layout" : ""}>{children}</div>;
};

export default AppLayout;
