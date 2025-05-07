import * as React from "react";
import type { SVGProps } from "react";
const SvgContactIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <g clipPath="url(#contact-icon_svg__a)">
      <path
        fill="#2196F3"
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24"
      />
      <path
        fill="#FAFAFA"
        d="M36 28.962c-2.589 0-5.058-.564-7.335-1.677a1.53 1.53 0 0 0-1.149-.069 1.51 1.51 0 0 0-.861.765l-1.08 2.235a21.1 21.1 0 0 1-7.791-7.791l2.238-1.08a1.503 1.503 0 0 0 .696-2.01c-1.116-2.274-1.68-4.743-1.68-7.335a1.5 1.5 0 0 0-1.5-1.5H12a1.5 1.5 0 0 0-1.5 1.5c0 14.061 11.439 25.5 25.5 25.5a1.5 1.5 0 0 0 1.5-1.5v-5.538a1.5 1.5 0 0 0-1.5-1.5"
      />
    </g>
    <defs>
      <clipPath id="contact-icon_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgContactIcon;
