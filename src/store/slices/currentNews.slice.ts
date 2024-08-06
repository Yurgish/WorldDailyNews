import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INewsItem } from "../../models/INews";

interface State {
    category: string;
    news: INewsItem[] | undefined;
    keyWords: string;
    isTheNewsWithTheCurrentFiltersOver: boolean;
}

const initialState: State = {
    category: "latest",
    news: undefined,
    keyWords: "",
    isTheNewsWithTheCurrentFiltersOver: false,
};

export const currentNewsSlice = createSlice({
    name: "currentNews",
    initialState,
    reducers: {
        setCurrentCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
            state.news = undefined;
            state.keyWords = "";
            state.isTheNewsWithTheCurrentFiltersOver = false;
        },
        setCurrentNews: (state, action: PayloadAction<INewsItem[]>) => {
            if (state.news) {
                state.news = [...state.news, ...action.payload];
            } else {
                state.news = action.payload;
            }
        },
        setKeyWords: (state, action: PayloadAction<string>) => {
            state.keyWords = action.payload;
            state.news = undefined;
            state.isTheNewsWithTheCurrentFiltersOver = false;
        },
        setIsNewsOver: (state, action: PayloadAction<boolean>) => {
            state.isTheNewsWithTheCurrentFiltersOver = action.payload;
        },
    },
});

export const { setCurrentCategory, setCurrentNews, setKeyWords, setIsNewsOver } = currentNewsSlice.actions;

export default currentNewsSlice.reducer;
