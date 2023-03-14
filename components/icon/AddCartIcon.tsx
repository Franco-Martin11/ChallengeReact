import * as React from "react"
import { SVGProps } from "react"

const AddCartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={54}
    height={54}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={0.4}
      y={0.4}
      width={53.2}
      height={53.2}
      rx={11.6}
      stroke="#FF9F24"
      strokeWidth={0.8}
    />
    <circle cx={27} cy={21} r={4.25} stroke="#FF9F24" strokeWidth={1.5} />
    <path
      d="M19.306 24.597a3.25 3.25 0 0 1 3.225-2.847h8.938a3.25 3.25 0 0 1 3.225 2.847l1 8a3.25 3.25 0 0 1-3.225 3.653H21.53a3.25 3.25 0 0 1-3.225-3.653l1-8Z"
      fill="#fff"
      stroke="#FF9F24"
      strokeWidth={1.5}
    />
    <circle cx={24.75} cy={25.75} r={0.75} fill="#FF9F24" />
    <circle cx={28.75} cy={25.75} r={0.75} fill="#FF9F24" />
  </svg>
)

export default AddCartIcon
