import * as React from "react";
import { JSX } from "react/jsx-runtime";
const SvgMoreArrow = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={9} {...props}>
        <path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M1 4.5h19m0 0L16.5 1M20 4.5 16.5 8" />
    </svg>
);
export default SvgMoreArrow;
