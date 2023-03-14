import * as React from "react"
import { SVGProps } from "react"

const BackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={40} height={40} rx={12} fill="#fff" />
    <path fill="#323232" d="M13 19h15v1.5H13z" />
    <path
      d="m19 13.2-7 6.5 7 6.5"
      stroke="#323232"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
)

export default BackIcon
