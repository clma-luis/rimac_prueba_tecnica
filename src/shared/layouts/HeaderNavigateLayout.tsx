import React, { useEffect, useState } from "react";
import { HeaderNavigation } from "../../components/headerNavigation/HeaderNavigation";
import { useLocation } from "react-router-dom";
import { RoutesPath } from "../../modules/constants/routes";

const HeaderNavigateLayout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const [showComponent, setShowComponent] = useState(false);
  const [toNavigate, setToNavigate] = useState(RoutesPath.HOME);

  useEffect(() => {
    if (pathname === RoutesPath.PLAN || pathname === RoutesPath.SUMMARY) {
      setShowComponent(true);
      handleNavigate()
    } else {
      setShowComponent(false);
    }
    
  }, [pathname]);

  const handleNavigate = () => {
    if (pathname === RoutesPath.SUMMARY) setToNavigate(RoutesPath.PLAN);
    else setToNavigate(RoutesPath.HOME);
  };

  return (
    <>
      {showComponent && <HeaderNavigation toNavigate={toNavigate} />}
      {children}
    </>
  );
};

export default HeaderNavigateLayout;
