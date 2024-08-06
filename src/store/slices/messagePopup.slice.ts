import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type State = {
    message: string;
};

const initialState: State = {
    message: "",
};

export const currentMessagePopupSlice = createSlice({
    name: "currentMessagePopup",
    initialState,
    reducers: {
        setCurrentMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
        setCurrentMessageNull: (state) => {
            state.message = "";
        },
    },
});

export const { setCurrentMessage, setCurrentMessageNull } = currentMessagePopupSlice.actions;

export default currentMessagePopupSlice.reducer;
