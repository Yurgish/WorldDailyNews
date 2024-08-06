import { FC } from "react";

interface LineProps {
    additionalClassNames?: string;
}

const Line: FC<LineProps> = ({ additionalClassNames }) => {
    return <span className={`block w-full h-[2px] bg-gray-200 ${additionalClassNames}`}></span>;
};

export default Line;
