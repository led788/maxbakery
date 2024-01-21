'use client';
import { iProduct } from '@/interfaces/product.interface';
import React, { FC, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation';
import SimpleClientSideSorting from './SimpleClientSideSorting';

interface IProps {
    data: iProduct[]
    getData?: () => void
    getFilteredData: () => void
}

const Sortings: FC<IProps> = ({ data, getFilteredData }: IProps) => {

    const router = useRouter()
    const [isFetching, setIsFetching] = useState(false)
    const [isPending, startTransition] = useTransition()

    const isMutating = isFetching || isPending

    const handleFetch = async () => {
        setIsFetching(true)
        await getFilteredData()
        setIsFetching(false)
        startTransition(() => {
            router.refresh();
        });
    }


    return (
        <div>
            <SimpleClientSideSorting data={data} />

            {
                !isMutating &&
                <button onClick={handleFetch}>
                    fetch
                </button>
            }

        </div>
    )
}

export default Sortings