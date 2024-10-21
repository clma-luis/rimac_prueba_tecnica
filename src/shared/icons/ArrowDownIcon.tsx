import React from "react";
import { IconProps } from "./config";

const ArrowDownIcon: React.FC<IconProps> = (props) => {
  const { color = "#03050F", width = 20, height = 20 } = props;
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.9999 14.8937L3.49365 8.38115L5.25616 6.61865L9.9999 11.3562L14.7437 6.61865L16.5062 8.38115L9.9999 14.8937Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDownIcon;
