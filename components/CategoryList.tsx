
import axios from "axios"
import Link from "next/link"
import Sortings from "./Sortings/Sortings"
import { iProduct } from "@/interfaces/product.interface"

async function getData() {

    try {
        const res = (await fetch('https://retailapi.ru/api/categories/', { cache: 'force-cache' })).json()
        return res
    } catch (error) {

    }

    // if (!res.ok) {
    //     throw new Error('Failed to fetch data')
    // }

    // return res.json()

    // const {data} = await axios.get<ICategory[]>('https://retailapi.ru/api/categories/')
}


export default async function CategoryList() {

    const data = await getData()

    const getFilteredData = async () => {
        'use server'
        // there will be request for filtered products, now simple refetching
        await getData()
    }

    return (
        <div>
            <Sortings data={data} getFilteredData={getFilteredData} />
            <ul>
                {data.map((category: any, index: number) => (
                    // <li key={category.id}><Link href={'/category/' + category.slug}> {category.name}</Link></li>
                    <li key={category.id}>
                        <Link href={`/catalog/${category.id}`}>{category.name}</Link>
                    </li>
                ))
                }
            </ul >
        </div >
    )
}


