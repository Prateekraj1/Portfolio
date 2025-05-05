import * as React from "react";
import type { SVGProps } from "react";
const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 15"
    {...props}
  >
    <path
      stroke="#406AFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M1.166 7.5h11.667m0 0L6.999 1.667M12.833 7.5l-5.834 5.833"
    />
  </svg>
);
export default SvgArrow;
