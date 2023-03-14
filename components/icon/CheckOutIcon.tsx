import * as React from "react"
import { SVGProps } from "react"

const CheckOutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 8h5M9 16h5M9 12h7"
      stroke="#8F8F8F"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={3.75}
      y={2.75}
      width={16.5}
      height={18.5}
      rx={3.25}
      stroke="#8F8F8F"
      strokeWidth={1.5}
    />
  </svg>
)

export default CheckOutIcon
