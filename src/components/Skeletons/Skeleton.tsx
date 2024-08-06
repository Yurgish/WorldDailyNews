import { FC } from "react";
import { ESkeletonType } from "../../models/ISkeleton";

interface Props {
    type: ESkeletonType;
    styles?: string;
}

const getSkeletonTypeStyles = (type: ESkeletonType) => {
    switch (type) {
        case ESkeletonType.Title:
            return "h-10";
        case ESkeletonType.Image:
            return "h-full";
        case ESkeletonType.Category:
            return "min-w-20 max-w-20 h-7";
        case ESkeletonType.Paragraph:
            return "h-5 max-w-44";
        default:
            return "";
    }
};

const Skeleton: FC<Props> = ({ type, styles = "" }) => {
    return <div className={`animate-pulse bg-gray-200 w-full ${getSkeletonTypeStyles(type)} ${styles}`}></div>;
};

export default Skeleton;
