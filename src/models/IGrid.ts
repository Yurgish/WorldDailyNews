import { ENewsItemImgPosition } from "./INews";

export enum ENewsGridTypes {
    Base,
    Grid10,
}

export interface IGridStyles {
    gridContainer: string;
    itemStyles: IItemGridStyles[];
}

interface IItemGridStyles {
    itemStyles: string;
    itemImagePosition: ENewsItemImgPosition;
}
