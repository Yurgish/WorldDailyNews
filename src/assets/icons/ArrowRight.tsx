import React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string;
}

const SvgArrowRight: React.FC<Props> = ({ color = "#ADADAD", ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={128} height={12} {...props}>
        <path
            fill={color}
            d="M1.114 5a1 1 0 1 0 0 2zm126.273 1L121.614.226 115.84 6l5.774 5.774zM1.114 7h120.5V5H1.114z"
        />
    </svg>
);
export default SvgArrowRight;
