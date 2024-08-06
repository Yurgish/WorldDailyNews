import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import { useGetNewsByFilterQuery } from "../services/news.service";
import { setCurrentNews, setIsNewsOver } from "../store/slices/currentNews.slice";
import { setCurrentMessage } from "@/store/slices/messagePopup.slice";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const useNewsHandler = () => {
    const [page, setPage] = useState(1);
    const dispatch = useAppDispatch();
    const currentCategory = useAppSelector((state) => state.currentNewsReducer.category);
    const news = useAppSelector((state) => state.currentNewsReducer.news);
    const keyWords = useAppSelector((state) => state.currentNewsReducer.keyWords);
    const isNewsOver = useAppSelector((state) => state.currentNewsReducer.isTheNewsWithTheCurrentFiltersOver);

    const { data, isFetching, error } = useGetNewsByFilterQuery({
        category: currentCategory,
        page_number: page,
        page_size: 10,
        keywords: keyWords,
    });

    // Коректне відображення новин, перевірка чи кількість новин вже закінчена, щоб не викликати фетч без потреки

    useEffect(() => {
        if (data && data.news.length < 10) {
            dispatch(setIsNewsOver(true));
            dispatch(setCurrentMessage("Unable to find news by these filters."));
        }
        if (data && data.news && isFetching == false) {
            dispatch(setCurrentNews(data.news));
        }
    }, [data, dispatch, page]);

    useEffect(() => {
        const onScroll = () => {
            const scrollThreshold = 300;

            const scrolledToBottom =
                document.documentElement.scrollHeight - (window.innerHeight + window.scrollY) <= scrollThreshold;

            if (scrolledToBottom && !isFetching && isNewsOver === false) {
                console.log("Added news from api to local storage");
                setPage((prevPage) => prevPage + 1);
            }
        };

        document.addEventListener("scroll", onScroll);

        return function () {
            document.removeEventListener("scroll", onScroll);
        };
    }, [isFetching]);

    useEffect(() => {
        setPage(1);
    }, [currentCategory, dispatch]);

    useEffect(() => {
        if (error) {
            console.log(error);
            dispatch(setCurrentMessage("Error, unable to find news for this query."));
        }
    }, [error, dispatch]);

    return { news, page, isFetching, error };
};

export default useNewsHandler;
