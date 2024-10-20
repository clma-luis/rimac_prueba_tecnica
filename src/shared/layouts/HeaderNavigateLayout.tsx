import React, { useEffect, useState } from "react";
import { HeaderNavigation } from "../../components/headerNavigation/HeaderNavigation";
import { useLocation } from "react-router-dom";

const HeaderNavigateLayout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setShowComponent(true);
    } else {
      setShowComponent(false);
    }
  }, [pathname]);

  return (
    <>
      {showComponent && <HeaderNavigation />}
      {children}
    </>
  );
};

export default HeaderNavigateLayout;
