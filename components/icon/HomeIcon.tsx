import * as React from "react"
import { SVGProps } from "react"

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={19}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 20h4.894c1.166 0 2.117-.929 2.106-2.07V8.177a2.04 2.04 0 0 0-.745-1.573L10.866.491a2.147 2.147 0 0 0-2.732 0L.745 6.603C.27 6.993 0 7.564 0 8.176v9.755C0 19.07.95 20 2.117 20H7v-5.5a2.5 2.5 0 0 1 5 0V20Z"
      fill="#FF9F24"
    />
  </svg>
)

export default HomeIcon
