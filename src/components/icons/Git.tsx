import * as React from "react";
import type { SVGProps } from "react";
const SvgGit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 51 50"
    {...props}
  >
    <g clipPath="url(#git_svg__a)">
      <path
        fill="#EE513B"
        d="M2.045 27.524a3.57 3.57 0 0 1 0-5.048l21.431-21.43a3.57 3.57 0 0 1 5.048 0l21.43 21.43a3.57 3.57 0 0 1 0 5.048l-21.43 21.43a3.57 3.57 0 0 1-5.048 0z"
      />
      <path
        fill="#fff"
        d="M19.134 5 17 7.171l5.512 5.608a3.8 3.8 0 0 0-.347 1.601 3.8 3.8 0 0 0 2.414 3.553v13.718a3.795 3.795 0 0 0-2.414 3.553c0 2.096 1.67 3.796 3.731 3.796s3.732-1.7 3.732-3.796c0-1.473-.825-2.75-2.03-3.38V17.952l5.269 5.36a3.8 3.8 0 0 0-.33 1.564c0 2.096 1.67 3.796 3.731 3.796S40 26.972 40 24.876s-1.67-3.796-3.732-3.796c-.4 0-.786.064-1.148.183l-5.659-5.757c.109-.356.167-.734.167-1.126 0-2.096-1.67-3.796-3.732-3.796-.385 0-.756.06-1.106.17z"
      />
    </g>
    <defs>
      <clipPath id="git_svg__a">
        <path fill="#fff" d="M.82 0h50v50h-50z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGit;
