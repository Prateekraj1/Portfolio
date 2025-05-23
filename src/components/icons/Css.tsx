import * as React from "react";
import type { SVGProps } from "react";
const SvgCss = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 50 50"
    {...props}
  >
    <path fill="#264DE4" d="M7.031 44.922 2.93 0h44.043l-4.004 44.922L25 50" />
    <path fill="#2965F1" d="M25 3.613v42.48l14.55-4.003L42.97 3.613" />
    <path
      fill="#EBEBEB"
      d="M11.133 9.18H25v5.468H11.621m.488 5.665H25v5.566H12.598m.293 2.734h5.468l.391 4.395 6.25 1.66v5.762l-11.426-3.125"
    />
    <path
      fill="#fff"
      d="M25 20.313v5.566h6.738l-.683 7.129L25 34.668v5.762l11.23-3.125L38.77 9.18H25v5.468h7.813l-.538 5.665z"
    />
  </svg>
);
export default SvgCss;
