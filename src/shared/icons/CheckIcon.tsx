import React from "react";
import { IconProps } from "./config";

const CheckIcon: React.FC<IconProps> = (porps) => {
  const { color = "#FFFFFF", width = 13, height = 11 } = porps;
  return (
    <svg width={width} height={height} viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1813 1.11293C12.5607 1.434 12.6081 2.00188 12.287 2.38133L5.687 10.1813C5.52153 10.3769 5.28058 10.4927 5.02451 10.4996C4.76844 10.5066 4.52153 10.4042 4.34564 10.2179L0.945642 6.61794C0.604351 6.25658 0.620626 5.68696 0.981992 5.34567C1.34336 5.00438 1.91297 5.02066 2.25427 5.38202L4.96311 8.25021L10.9129 1.21863C11.234 0.839189 11.8019 0.791865 12.1813 1.11293Z"
        fill={color}
      />
    </svg>
  );
};

export default CheckIcon;
