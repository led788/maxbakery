import { iProduct } from '@/interfaces/product.interface'
import React, { FC, useState } from 'react'
import ProductItem from '../ProductItem'

interface IProps {
    data: iProduct[]
}

const SimpleClientSideSorting: FC<IProps> = ({ data }: IProps) => {

    const [filtered, setFiltered] = useState<iProduct[]>([])
    const filterProducts = () => {
        const filtered = data.filter(item => item.name[0] === 'П')
        setFiltered(filtered)
    }

    return (
        <div>

            <button onClick={filterProducts}>
                еда на "П"
            </button>

            {
                !!filtered.length &&
                filtered.map(item => {
                    return <ProductItem key={item.id} product={item} />
                })
            }
        </div>
    )
}

export default SimpleClientSideSorting