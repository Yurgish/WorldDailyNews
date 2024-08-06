import { FC } from "react";
import { ENewsItemImgPosition, INewsItem } from "../models/INews";
import NewsItem from "./NewsItem/NewsItem";

import useGridTemplate from "../hooks/useGridTemplate";
import { ENewsGridTypes } from "../models/IGrid";
import NewsItemSkeleton from "./Skeletons/NewsItemSkeleton";
import useMediaQuery from "@/hooks/useMediaQuery";

interface Props {
    newsItemsArray: INewsItem[] | undefined;
    gridType: ENewsGridTypes;
    isLoading?: boolean;
}

const NewsGrid: FC<Props> = ({ newsItemsArray, gridType, isLoading = false }) => {
    const gridStyles = useGridTemplate(gridType);
    const isMedia = useMediaQuery("(max-width: 1379px)");

    const renderSkeletons = () =>
        Array.from({ length: gridStyles.itemStyles.length }).map((_, i) => (
            <NewsItemSkeleton
                key={i}
                gridStyles={gridStyles.itemStyles[i].itemStyles}
                imagePosition={isMedia ? ENewsItemImgPosition.Top : gridStyles.itemStyles[i].itemImagePosition}
            />
        ));

    const renderNewsItems = () =>
        newsItemsArray
            ?.slice(0, gridStyles.itemStyles.length)
            .map((newsItem, i) => (
                <NewsItem
                    key={newsItem.id}
                    newsItem={newsItem}
                    gridStyles={gridStyles.itemStyles[i].itemStyles}
                    imagePosition={isMedia ? ENewsItemImgPosition.Top : gridStyles.itemStyles[i].itemImagePosition}
                />
            ));

    return (
        <div className={`mb-6 ${gridStyles.gridContainer}`}>
            {isLoading || !newsItemsArray ? renderSkeletons() : renderNewsItems()}
        </div>
    );
};

export default NewsGrid;
