
export default async function getBooks(query: string, signal : any) {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10&page=1`;
    try {
        const response = await fetch(url, {signal});
        if (!response.ok) {
            throw new Error(`Failed to fetch books: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data)
       
        return data;
    } catch (error) {
        if (error instanceof Error && 'name' in error && error.name === "AbortError") {
            console.error("The previous request got aborted")
        } else {
            console.error(error)
        }
        
    }
}