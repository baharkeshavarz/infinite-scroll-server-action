import { fetchProducts } from "@/actions/fetch-products";
import Beers from "@/components/Beers";
import LoadMore from "@/components/LoadMore";

export default async function Home() {
  const beers = await fetchProducts(1);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen max-w-5xl">
    <h1 className="text-3xl font-bold mb-4 text-center">Infinite Beers</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
       <Beers beers={beers} />
       <LoadMore/>
    </div>
  </div>
  )
}
