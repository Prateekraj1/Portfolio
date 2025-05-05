import * as React from "react";
import type { SVGProps } from "react";
const SvgThreads = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <path
      fill="url(#threads_svg__a)"
      fillRule="evenodd"
      d="M27.833 15c0 7.088-5.745 12.833-12.833 12.833S2.167 22.088 2.167 15 7.912 2.167 15 2.167 27.833 7.912 27.833 15M30 15c0 8.284-6.716 15-15 15S0 23.284 0 15 6.716 0 15 0s15 6.716 15 15m-6.724-6.724a1.552 1.552 0 1 1-3.103 0 1.552 1.552 0 0 1 3.103 0m-8.112 4.565.19-2.498.164-2.16a6.837 6.837 0 1 0 6.3 7.338v-.001l-2.16-.165-2.498-.19-2.16-.164zm3.798 4.634-4.127-.314-2.16-.164.164-2.16.314-4.127q-.228.1-.446.221a4.672 4.672 0 1 0 6.255 6.544"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="threads_svg__a"
        x1={15}
        x2={15}
        y1={0}
        y2={30}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF" />
        <stop offset={0.461} stopColor="#FFF" />
        <stop offset={1} stopColor="#FFF" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgThreads;
