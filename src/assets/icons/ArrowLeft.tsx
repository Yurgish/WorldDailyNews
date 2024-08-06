import React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string;
}

const SvgArrowLeft: React.FC<Props> = ({ color = "#ADADAD", ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={129} height={12} {...props}>
        <path fill={color} d="m.84 6 5.774 5.774L12.387 6 6.614.226zm126.274 1a1 1 0 0 0 0-2zM6.614 7h120.5V5H6.614z" />
    </svg>
);

export default SvgArrowLeft;
