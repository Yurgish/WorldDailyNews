import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICategories } from "../models/ICategories";
import { INewsRequest, INewsResponse } from "../models/INews";

const BASE_URL = import.meta.env.VITE_NEWS_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getCategories: builder.query<ICategories, null>({
            query: () => ({
                url: "available/categories",
                params: {
                    apiKey: API_KEY,
                },
            }),
        }),
        getLatestNews: builder.query<INewsResponse, null>({
            query: () => ({
                url: "latest-news",
                params: {
                    apiKey: API_KEY,
                },
            }),
        }),
        getNewsByFilter: builder.query<INewsResponse, INewsRequest>({
            query: ({ category, page_number, page_size, keywords }) => ({
                url: "search",
                params: {
                    apiKey: API_KEY,
                    category,
                    page_size,
                    page_number,
                    keywords,
                },
            }),
        }),
    }),
});

export const { useGetCategoriesQuery, useGetLatestNewsQuery, useGetNewsByFilterQuery } = newsApi;

// merge: (currentCache, newItems) => {
//     const newsIds = new Set(currentCache.news.map((news) => news.id));
//     newItems.news.forEach((news) => {
//         if (!newsIds.has(news.id)) {
//             currentCache.news.push(news);
//             newsIds.add(news.id);
//         }
//     });
//     return { ...currentCache };
// },
// forceRefetch({ currentArg, previousArg }) {
//     return (
//         currentArg?.category !== previousArg?.category ||
//         currentArg?.page_number !== previousArg?.page_number ||
//         currentArg?.keywords !== previousArg?.keywords
//     );
// },
// serializeQueryArgs: ({ endpointName, queryArgs }) => {
//     return `${endpointName}-${queryArgs.category}-${queryArgs.page_number}-${queryArgs.keywords}`;
// },
// }),
