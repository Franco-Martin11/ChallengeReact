import * as React from "react";
import { SVGProps } from "react";

const BagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={6} r={4.25} stroke="#8F8F8F " strokeWidth={1.5} />
    <path
      d="M4.306 9.597A3.25 3.25 0 0 1 7.531 6.75h8.938a3.25 3.25 0 0 1 3.225 2.847l1 8a3.25 3.25 0 0 1-3.225 3.653H6.53a3.25 3.25 0 0 1-3.225-3.653l1-8Z"
      fill="#fff"
      stroke="#8F8F8F"
      strokeWidth={1.5}
    />
    <circle cx={9.75} cy={10.75} r={0.75} fill="#FF9F24" />
    <circle cx={13.75} cy={10.75} r={0.75} fill="#FF9F24" />
  </svg>
);

export default BagIcon;
