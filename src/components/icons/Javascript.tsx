import * as React from "react";
import type { SVGProps } from "react";
const SvgJavascript = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 51 50"
    {...props}
  >
    <g clipPath="url(#javascript_svg__a)">
      <path
        fill="#F0DB4F"
        d="M43 0H8A7.5 7.5 0 0 0 .5 7.5v35A7.5 7.5 0 0 0 8 50h35a7.5 7.5 0 0 0 7.5-7.5v-35A7.5 7.5 0 0 0 43 0"
      />
      <path
        fill="#323330"
        d="M32.14 36.133c.977 1.66 2.344 2.832 4.59 2.832 1.954 0 3.223-.977 3.223-2.344 0-1.562-1.27-2.148-3.418-3.125l-1.172-.488c-3.418-1.465-5.664-3.223-5.664-7.031 0-3.516 2.637-6.25 6.836-6.25 3.028 0 5.176 1.074 6.64 3.808l-3.612 2.344c-.782-1.465-1.66-2.05-3.028-2.05-1.367 0-2.246.878-2.246 2.05 0 1.367.879 1.953 2.93 2.832l1.172.488c4.004 1.758 6.25 3.418 6.25 7.422 0 4.2-3.32 6.543-7.813 6.543-4.394 0-7.226-2.05-8.594-4.785zm-16.6.39c.78 1.27 1.366 2.442 3.026 2.442 1.563 0 2.54-.586 2.54-2.93v-16.21h4.687V35.84c0 4.883-2.832 7.031-7.031 7.031-3.809 0-5.957-1.953-7.032-4.297z"
      />
    </g>
    <defs>
      <clipPath id="javascript_svg__a">
        <path fill="#fff" d="M.5 0h50v50H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgJavascript;
