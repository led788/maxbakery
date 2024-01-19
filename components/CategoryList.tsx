import { ICategory } from "@/interfaces/category.interface"
import axios from "axios"
import Link from "next/link"

async function getData() {
    // const res = await fetch('https://retailapi.ru/api/categories/', { cache: 'force-cache' })


    // if (!res.ok) {
    //     throw new Error('Failed to fetch data')
    // }

    // return res.json()

    const {data} = await axios.get<ICategory[]>('https://retailapi.ru/api/categories/')
    return data

}


export default async function CategoryList() {

    const data = await getData()

    return (
        <div>
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


