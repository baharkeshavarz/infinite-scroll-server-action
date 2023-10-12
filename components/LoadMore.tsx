"use client"

import React, { useEffect, useState } from 'react'
import { Spinner } from './Spinner';
import { useInView} from "react-intersection-observer"
import { Beer } from '@/types';
import { fetchProducts } from '@/actions/fetch-products';
import Beers from './Beers';
import { delayProcess } from '@/lib/utils';

export default function LoadMore() {
  const [beers, setBeers ] = useState<Beer[]>([])  
  const [page, setPage] = useState(1);
  const { ref, inView} = useInView();  

  useEffect(() => {
    const loadMoreBeers = async () => {
      await delayProcess(1000)
      const nextPage = page + 1;
      const newProducts = await fetchProducts(nextPage) ?? [];
      setBeers(prevBeers => [...prevBeers, ...newProducts])
      setPage(nextPage);
   }

   if (inView) {
     loadMoreBeers()
   }
  }, [inView]) 

  return (
    <>
        <Beers beers={beers} />
        <div     
            className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3" 
            ref={ref}
            >
           <Spinner/>
        </div>
    </>
  )
}
