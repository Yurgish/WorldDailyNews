import { FC } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { setCurrentCategory } from "../../store/slices/currentNews.slice";

interface Props {
    categories: string[];
}

const NewsItemCategories: FC<Props> = ({ categories }) => {
    const dispatch = useAppDispatch();
    const handleClick = (category: string) => {
        dispatch(setCurrentCategory(category));
    };

    return (
        <ul className="flex">
            {categories.map((category) => (
                <li className="relative cursor-pointer group" key={category} onClick={() => handleClick(category)}>
                    <p className="px-4 py-2 uppercase font-semibold text-sm lg:text-xs z-[10] group-hover:text-white transition-all duration-150 ease-out">
                        {category}
                    </p>
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-red-800 transition-all duration-300 ease-out transform group-hover:h-full z-[-1]"></span>
                </li>
            ))}
        </ul>
    );
};

export default NewsItemCategories;
