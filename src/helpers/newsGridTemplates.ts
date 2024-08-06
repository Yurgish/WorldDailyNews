import { ENewsGridTypes, IGridStyles } from "../models/IGrid";
import { ENewsItemImgPosition } from "../models/INews";

const gridStyles: { [key in ENewsGridTypes]: IGridStyles } = {
    [ENewsGridTypes.Base]: {
        gridContainer: "grid grid-cols-5 gap-0",
        itemStyles: [
            { itemStyles: "row-span-2 col-span-5", itemImagePosition: ENewsItemImgPosition.Left },
            { itemStyles: "row-start-3 col-start-4 row-end-4 col-end-6", itemImagePosition: ENewsItemImgPosition.Top },
            {
                itemStyles: "row-span-2 col-span-3 row-start-3 col-start-1",
                itemImagePosition: ENewsItemImgPosition.Left,
            },
            {
                itemStyles: "row-span-2 col-span-2 row-start-4 col-start-4",
                itemImagePosition: ENewsItemImgPosition.Right,
            },
            {
                itemStyles: "row-span-1 col-span-3 row-start-5 col-start-1",
                itemImagePosition: ENewsItemImgPosition.Top,
            },
            {
                itemStyles: "row-span-2 col-span-2 row-start-6 col-start-1",
                itemImagePosition: ENewsItemImgPosition.Left,
            },
            {
                itemStyles: "row-span-2 col-span-3 row-start-6 col-start-3",
                itemImagePosition: ENewsItemImgPosition.Right,
            },
        ],
    },
    [ENewsGridTypes.Grid10]: {
        gridContainer: "grid grid-cols-6 gap-2 h-full sm:flex sm:flex-col",
        itemStyles: [
            {
                itemStyles: "row-span-2 col-span-6 row-start-1 col-start-1",
                itemImagePosition: ENewsItemImgPosition.Left,
            },
            {
                itemStyles: "row-span-2 col-span-4 lg:col-span-3",
                itemImagePosition: ENewsItemImgPosition.Left,
            },
            {
                itemStyles: "row-span-2 col-span-2 lg:col-span-3",
                itemImagePosition: ENewsItemImgPosition.Top,
            },
            {
                itemStyles: "row-span-2 col-span-4 lg:col-span-3",
                itemImagePosition: ENewsItemImgPosition.Left,
            },
            {
                itemStyles: "row-span-2 col-span-2 lg:col-span-3",
                itemImagePosition: ENewsItemImgPosition.Top,
            },
            {
                itemStyles: "row-span-2 col-span-2 lg:col-span-6",
                itemImagePosition: ENewsItemImgPosition.Top,
            },
            {
                itemStyles: "row-span-2 col-span-2 lg:col-span-3",
                itemImagePosition: ENewsItemImgPosition.Top,
            },
            {
                itemStyles: "row-span-2 col-span-2 lg:col-span-3",
                itemImagePosition: ENewsItemImgPosition.Top,
            },
            {
                itemStyles: "row-span-2 col-span-3 lg:col-span-3",
                itemImagePosition: ENewsItemImgPosition.Left,
            },
            {
                itemStyles: "row-span-2 col-span-3 lg:col-span-3",
                itemImagePosition: ENewsItemImgPosition.Right,
            },
        ],
    },
};

export default gridStyles;
