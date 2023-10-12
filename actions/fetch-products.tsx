import { Beer } from "@/types";

export async function fetchProducts(page: number)  {
    const perPage = 12;
    const apiUrl = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`;

    try {
        const response = await fetch(apiUrl);
        const data = response.json();
        return data as unknown as Beer[];
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}