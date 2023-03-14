import * as React from "react"
import { SVGProps } from "react"

const KebabIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={40} height={40} rx={12} fill="#fff" />
    <circle cx={13.5} cy={19.5} r={1.5} fill="#323232" />
    <circle cx={20.5} cy={19.5} r={1.5} fill="#323232" />
    <circle cx={27.5} cy={19.5} r={1.5} fill="#323232" />
  </svg>
)

export default KebabIcon
