import { FC } from "react";
import Skeleton from "./Skeleton";
import { ESkeletonType } from "../../models/ISkeleton";

interface CategorySkeletonProps {
    length: number;
}

const CategorySkeleton: FC<CategorySkeletonProps> = ({ length }) => {
    return (
        <section className="flex gap-1">
            {Array.from({ length }).map((_, index) => (
                <Skeleton type={ESkeletonType.Category} key={index} />
            ))}
        </section>
    );
};

export default CategorySkeleton;
