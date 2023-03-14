import * as React from "react"
import { SVGProps } from "react"

const HamburgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={40} height={40} rx={12} fill="#fff" />
    <rect x={12} y={13} width={16} height={1.5} rx={0.75} fill="#0F0D23" />
    <rect x={12} y={19} width={10} height={1.5} rx={0.75} fill="#0F0D23" />
    <rect x={12} y={25} width={16} height={1.5} rx={0.75} fill="#0F0D23" />
  </svg>
)

export default HamburgerIcon
