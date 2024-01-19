import { FC } from "react";
import { ICategorySingle } from "../interfaces/category.interface";
import Link from "next/link";

const CategoryItem: FC<ICategorySingle> = ({ category }) => {
    return (
        <div>
            <h4>{category.name}</h4>
            <Link href={`/category/${category.slug}`}>{category.name}</Link>
        </div>
    )
}

export default CategoryItem