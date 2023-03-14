import * as React from "react"
import { SVGProps } from "react"

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity={0.3} stroke="#0F0D23" strokeWidth={1.5}>
      <circle cx={11.065} cy={11.065} r={6.315} />
      <path d="M16.092 15.844 19 18.647" strokeLinecap="round" />
    </g>
  </svg>
)

export default SearchIcon
