import * as React from "react";
import type { SVGProps } from "react";
const SvgNextjs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 50 50"
    {...props}
  >
    <mask
      id="nextjs_svg__a"
      width={50}
      height={50}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        fill="#000"
        d="M25 50c13.807 0 25-11.193 25-25S38.807 0 25 0 0 11.193 0 25s11.193 25 25 25"
      />
    </mask>
    <g mask="url(#nextjs_svg__a)">
      <path
        fill="#192333"
        d="M25 50c13.807 0 25-11.193 25-25S38.807 0 25 0 0 11.193 0 25s11.193 25 25 25"
      />
      <path
        fill="url(#nextjs_svg__b)"
        d="M41.53 43.756 19.206 15H15v19.992h3.365V19.273L38.889 45.79a25 25 0 0 0 2.641-2.034"
      />
      <path fill="url(#nextjs_svg__c)" d="M35.279 15h-3.334v20h3.334z" />
    </g>
    <defs>
      <linearGradient
        id="nextjs_svg__b"
        x1={30.278}
        x2={40.139}
        y1={32.361}
        y2={44.583}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="nextjs_svg__c"
        x1={33.612}
        x2={33.556}
        y1={15}
        y2={29.688}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgNextjs;
