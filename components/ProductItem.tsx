'use client'

import { iProduct } from "@/interfaces/product.interface";
import Link from "next/link";


interface ProductItemProps {
    product: iProduct;
}

export default function ProductItem({ product }: ProductItemProps) {

    const btnClick = (event: { target: any; }) => {
        console.log('+')
    }

    return (
        <div>
            {product.name}
            <button onClick={btnClick}>+</button>
        </div>
    )

}


// : FC<ICategorySingle> = ({ category }) => {
//     return (
//         <div>
//             <h4>{category.name}</h4>
//             <Link href={`/category/${category.slug}`}>{category.name}</Link>
//         </div>
//     )
// }

