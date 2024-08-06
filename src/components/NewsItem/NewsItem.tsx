import { FC } from "react";
import { ENewsItemImgPosition, INewsItem } from "../../models/INews";
import NewsItemCategories from "./NewsItemCategories";
import { formatTime } from "../../helpers/formatTime";
import { MoreArrow } from "../../assets/icons";
import Line from "../Line";
import { getNewsItemImagePositionClassName, getNewsItemImageStyles } from "../../helpers/newsItemImgPos";

interface Props {
    newsItem: INewsItem;
    isImage?: boolean;
    imagePosition?: ENewsItemImgPosition;
    gridStyles?: string;
}

const NewsItem: FC<Props> = ({
    newsItem,
    isImage = true,
    imagePosition = ENewsItemImgPosition.Left,
    gridStyles = "",
}) => {
    const imageUrl = newsItem.image === "None" || newsItem.image === null ? undefined : newsItem.image;

    return (
        <div className={`flex font-lato w-full  ${getNewsItemImagePositionClassName(imagePosition)} ${gridStyles}`}>
            {imageUrl && isImage && (
                <div className={`${getNewsItemImageStyles(imagePosition)} overflow-hidden`}>
                    <img
                        className="w-full h-full object-center object-cover"
                        src={imageUrl}
                        alt={newsItem.title || "News Item"}
                    />
                </div>
            )}
            <div
                className={`flex flex-col px-5 pb-3 pt-1 lg:pb-2 lg:px-2 ${
                    imagePosition === ENewsItemImgPosition.Top ? "h-full" : "w-full"
                }`}
            >
                <div className="flex justify-between items-center mb-4 flex-wrap md:mb-3">
                    <p className="text-sm mt-2">
                        {formatTime(new Date(newsItem.published))}
                        {newsItem.author && newsItem.author !== "None" && (
                            <span className="font-semibold"> By {newsItem.author}</span>
                        )}
                    </p>
                    <div className="mt-2">
                        <NewsItemCategories categories={newsItem.category} />
                    </div>
                </div>
                <div className="text-4xl xl-only:text-3xl lg-only:text-2xl lg:line-clamp-2 md:text-xl">
                    {newsItem.title}
                </div>
                <div className="text-lg font-light mt-3 mb-2 xl:text-base lg-only:line-clamp-4 md:line-clamp-2 md:text-sm sm-only:line-clamp-none">
                    {newsItem.description}
                </div>
                {/* Div for space managing */}
                <div className="flex-grow"></div>
                <a
                    href={newsItem.url}
                    target="_blank"
                    className="flex items-center gap-2 font-semibold py-2 mb-1 lg-only:text-sm md:text-xs group"
                >
                    <span className="group-hover:mr-2 ease-out duration-200">More</span>
                    <MoreArrow />
                </a>
                <Line additionalClassNames="bg-gray-200" />
            </div>
        </div>
    );
};

export default NewsItem;
