import * as React from "react";
import type { SVGProps } from "react";
const SvgHtml = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 50 50"
    {...props}
  >
    <path
      fill="#E34F26"
      d="M6.934 44.922 2.93 0h44.043l-4.004 44.922L24.902 50"
    />
    <path fill="#EF652A" d="m25 46.094 14.55-4.004L42.97 3.613H25" />
    <path
      fill="#EBEBEB"
      d="M25 20.313h-7.324l-.488-5.665H25V9.18H11.133l1.465 16.699H25zm-.098 14.355-6.152-1.66-.39-4.395h-5.47l.684 8.692 11.328 3.125z"
    />
    <path
      fill="#fff"
      d="M24.902 20.313v5.566h6.836l-.683 7.129-6.153 1.66v5.762l11.328-3.125 1.563-16.992zm0-11.133v5.468h13.38l.488-5.468z"
    />
  </svg>
);
export default SvgHtml;
