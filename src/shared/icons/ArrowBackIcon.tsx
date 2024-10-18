import React from "react";
import { IconProps } from "./config";

const ArrowBackIcon: React.FC<IconProps> = (props) => {
  const { color = "#A9AFD9", width = 8, height = 8 } = props;
  return (
    <svg width={width} height={height} viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.97146 7.90369L0.0639648 3.99994L3.97146 0.0961914L5.02897 1.15369L2.18647 3.99994L5.02897 6.84619L3.97146 7.90369Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowBackIcon;
