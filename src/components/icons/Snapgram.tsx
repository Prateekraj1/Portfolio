import * as React from "react";
import type { SVGProps } from "react";
const SvgSnapgram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <path
      fill="url(#snapgram_svg__a)"
      fillRule="evenodd"
      d="M27.833 15c0 7.088-5.745 12.833-12.833 12.833S2.167 22.088 2.167 15 7.912 2.167 15 2.167 27.833 7.912 27.833 15M30 15c0 8.284-6.716 15-15 15S0 23.284 0 15 6.716 0 15 0s15 6.716 15 15m-6.724-6.724a1.552 1.552 0 1 1-3.103 0 1.552 1.552 0 0 1 3.103 0M10.488 16.21a4.671 4.671 0 1 0 9.024-2.418 4.671 4.671 0 0 0-9.024 2.418m-2.093.56a6.838 6.838 0 1 0 13.21-3.54 6.838 6.838 0 0 0-13.21 3.54"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="snapgram_svg__a"
        x1={15}
        x2={15}
        y1={0}
        y2={30}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={0.461} stopColor="#fff" />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgSnapgram;
