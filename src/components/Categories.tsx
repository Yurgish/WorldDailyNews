import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useGetCategoriesQuery } from "../services/news.service";
import { setCurrentCategory } from "../store/slices/currentNews.slice";
import CategorySkeleton from "./Skeletons/CategorySkeleton";

import { Carousel, CarouselContent, CarouselItem } from "./shadcn/ui/carousel";
const Categories: React.FC = () => {
    const { data, isLoading } = useGetCategoriesQuery(null);
    const currentCategory = useAppSelector((state) => state.currentNewsReducer.category);
    const dispatch = useAppDispatch();

    const changeFilterState = (category: string) => {
        if (currentCategory === category) return;
        dispatch(setCurrentCategory(category));
    };

    return (
        <div className="flex scroll-smooth overflow-auto gap-1 whitespace-nowrap no-scrollbar snap-x py-1 mx-1 w-full ">
            {isLoading && !data ? (
                <CategorySkeleton length={25} />
            ) : (
                <Carousel
                    className="w-full"
                    opts={{
                        align: "start",
                        skipSnaps: true,
                        loop: true,
                    }}
                >
                    <CarouselContent className="ml-1 select-none">
                        {["latest", ...(data?.categories || [])].map((category) => (
                            <CarouselItem
                                className={`ml-1 pl-0 cursor-pointer transition-colors basis-auto relative group `}
                                key={category}
                                onClick={() => changeFilterState(category)}
                            >
                                <div
                                    className={`uppercase px-4 py-[5px] text-white font-lato text-xs cursor-pointer  `}
                                >
                                    {category}
                                </div>
                                <div
                                    className={`absolute bottom-0 top-0 left-0 w-full h-full bg-black z-[-1] group-hover:[clip-path:polygon(0_0,_100%_0,_100%_0,_0_0)] duration-300 ease-out ${
                                        currentCategory === category
                                            ? "[clip-path:polygon(0_0,_100%_0,_100%_0,_0_0)]"
                                            : "[clip-path:polygon(0_0,_100%_0,_100%_100%,_0%_100%)]"
                                    }`}
                                ></div>
                                <div className="absolute bottom-0 top-0 left-0 w-full h-full bg-red-800 z-[-2] "></div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            )}
        </div>
    );
};

export default Categories;
