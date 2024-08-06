import Line from "./Line";
import Categories from "./Categories";
import { IoIosSearch } from "react-icons/io";
import { Input } from "./shadcn/ui/input";
import { useAppDispatch } from "@/hooks/redux";
import { setKeyWords } from "@/store/slices/currentNews.slice";
import { useState } from "react";

const FilterSection = () => {
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState("");

    const handleEnterPress = (value: string) => {
        dispatch(setKeyWords(value));
    };

    const handleSearchClick = () => {
        dispatch(setKeyWords(inputValue));
    };

    return (
        <section className="mb-5 md:mb-3">
            <Line />
            <div className="flex">
                <div className="border-r-2 border-r-gray-200 border-solid flex items-center pl-2">
                    <IoIosSearch
                        className=" text-xl hover:fill-red-800 mt-[1px] cursor-pointer"
                        onClick={handleSearchClick}
                    />
                    <Input
                        className="h-full border-none w-50 font-lato py-0"
                        placeholder="Search news by words"
                        onEnterPress={handleEnterPress}
                        setInputValue={setInputValue}
                    />
                </div>
                <Categories />
            </div>
            <Line />
        </section>
    );
};

export default FilterSection;
