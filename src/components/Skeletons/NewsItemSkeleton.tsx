import { FC } from "react";
import { ENewsItemImgPosition } from "../../models/INews";
import CategorySkeleton from "./CategorySkeleton";
import { getNewsItemImagePositionClassName, getNewsItemImageStyles } from "../../helpers/newsItemImgPos";
import Skeleton from "./Skeleton";
import { ESkeletonType } from "../../models/ISkeleton";
import Line from "../Line";

interface Props {
    isImage?: boolean;
    imagePosition?: ENewsItemImgPosition;
    gridStyles?: string;
    descriptionSize?: number;
}

const NewsItemSkeleton: FC<Props> = ({
    isImage = true,
    imagePosition = ENewsItemImgPosition.Left,
    gridStyles = "",
    descriptionSize = 3,
}) => {
    return (
        <div className={`flex ${gridStyles} ${getNewsItemImagePositionClassName(imagePosition)}`}>
            {isImage && (
                <div
                    className={`${getNewsItemImageStyles(imagePosition)} ${
                        imagePosition === ENewsItemImgPosition.Top ? "min-h-60" : ""
                    }`}
                >
                    <Skeleton type={ESkeletonType.Image} />
                </div>
            )}
            <div
                className={`flex flex-col px-5 py-3 ${
                    imagePosition === ENewsItemImgPosition.Top ? "h-full" : "w-full"
                }`}
            >
                <div className="flex justify-between items-center mb-5 gap-3">
                    <CategorySkeleton length={2} />
                    <Skeleton type={ESkeletonType.Paragraph} styles="h-4" />
                </div>
                <Skeleton type={ESkeletonType.Title} />
                <Skeleton type={ESkeletonType.Title} styles="max-w-[60%] mt-2 mb-3" />
                <div className="flex flex-col gap-2 mb-3">
                    {Array.from({ length: descriptionSize }).map((_, i) => (
                        <Skeleton key={i} type={ESkeletonType.Paragraph} styles="max-w-full" />
                    ))}
                </div>
                {/* Div for space meneging */}
                <div className="flex-grow"></div>
                <CategorySkeleton length={1} />
                <Line additionalClassNames="animate-pulse mt-1" />
            </div>
        </div>
    );
};

export default NewsItemSkeleton;
