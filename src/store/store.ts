import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { newsApi } from "../services/news.service";
import currentNewsSlice from "./slices/currentNews.slice";
import currentMessagePopupSlice from "./slices/messagePopup.slice";

const rootReducer = combineReducers({
    [newsApi.reducerPath]: newsApi.reducer,
    currentNewsReducer: currentNewsSlice,
    currentMessagePopupReducer: currentMessagePopupSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
