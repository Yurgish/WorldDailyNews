export interface INewsResponse {
    status: string;
    news: INewsItem[];
    page: number;
}

export interface INewsRequest {
    category: string;
    page_number: number;
    page_size: number;
    keywords: string;
}

export interface INewsItem {
    id: string;
    title: string;
    description: string;
    url: string;
    author: string;
    image: string | null;
    language: string;
    category: string[];
    published: string;
}

export enum ENewsItemImgPosition {
    Top,
    Left,
    Right,
}
