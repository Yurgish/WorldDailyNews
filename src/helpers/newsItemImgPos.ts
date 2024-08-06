import { ENewsItemImgPosition } from "../models/INews";

export const getNewsItemImagePositionClassName = (imagePosition: ENewsItemImgPosition) => {
    switch (imagePosition) {
        case ENewsItemImgPosition.Top:
            return "flex-col";
        case ENewsItemImgPosition.Right:
            return "flex-row-reverse";
        default:
            return "flex-row";
    }
};

export const getNewsItemImageStyles = (imagePosition: ENewsItemImgPosition) => {
    switch (imagePosition) {
        case ENewsItemImgPosition.Top:
            return "w-full h-auto max-h-64";
        default:
            return "w-full h-auto max-w-[600px]";
    }
};
