import * as React from "react";
import type { SVGProps } from "react";
const SvgMotion = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 50 50"
    {...props}
  >
    <g clipPath="url(#motion_svg__a)">
      <path fill="#59529D" d="M50 0v25L25 50 12.5 37.5 25 25z" />
      <path fill="#5271B4" d="M50 25v25L37.5 37.5z" />
      <path fill="#BB4B96" d="M25 25 0 50V0z" />
    </g>
    <defs>
      <clipPath id="motion_svg__a">
        <path fill="#fff" d="M0 0h50v50H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMotion;
