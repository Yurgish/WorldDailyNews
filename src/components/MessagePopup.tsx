import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setCurrentMessageNull } from "@/store/slices/messagePopup.slice";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const MessagePopup = () => {
    const message = useAppSelector((state) => state.currentMessagePopupReducer.message);
    const dispatch = useAppDispatch();

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setVisible(true);
            const hideTimer = setTimeout(() => {
                setVisible(false);
            }, 2500);

            const removeTimer = setTimeout(() => {
                dispatch(setCurrentMessageNull());
            }, 3000);

            return () => {
                clearTimeout(hideTimer);
                clearTimeout(removeTimer);
            };
        }
    }, [message, dispatch]);

    return createPortal(
        <div
            className={`fixed bottom-0 left-0 right-0 flex justify-center bg-black w-full text-white font-ropa-sans text-base ${
                visible ? "animate-slide-in" : "animate-slide-out"
            }`}
        >
            {message}
        </div>,
        document.body
    );
};

export default MessagePopup;
