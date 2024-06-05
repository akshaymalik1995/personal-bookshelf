
export default async function getBooks(query: string) {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10&page=1`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch books: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data)
       
        return data;
    } catch (error) {
        console.error(error)
    }
}