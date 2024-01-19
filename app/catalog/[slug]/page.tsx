import ProductItem from "@/components/ProductItem"
import { iProduct } from "@/interfaces/product.interface"
import axios from "axios"

async function getData(categoryId: string) {
    const { data } = await axios.get<iProduct[]>('https://retailapi.ru/api/products/' + categoryId)
    return data

}

export default async function CatalogItem({ params }: { params: { slug: string } }) {

    const data = await getData(params.slug)

    return (
        <div>
            <div>Slug: {params.slug}</div>

            

            <ul>
                {data.map((product: iProduct, index: number) => (

                    <li key={product.id}>
                        <ProductItem product={product} />
                        {/* {product.name} */}
                    </li>
                ))
                }
            </ul >

        </div >
    )
}

