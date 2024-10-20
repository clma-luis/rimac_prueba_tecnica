import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import Stepper from "../../components/ui/stepper/Stepper";

const StepperLayout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    if (pathname === "/plan" || pathname === "/summary") {
      setShowComponent(true);
    } else {
      setShowComponent(false);
    }
  }, [pathname]);

  return (
    <>
      {showComponent && <Stepper />}
      {children}
    </>
  );
};

export default StepperLayout;
