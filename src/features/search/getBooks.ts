// Cache object to store previously fetched book data, reducing redundant API calls.
let cache = {};

/**
 * Asynchronously retrieves book data from the Open Library API based on a search query.
 * 
 * This function constructs a URL with the provided search query, sends a GET request to the Open Library API,
 * processes the JSON response, and stores the result in the cache for potential reuse. If the data is not found in the cache,
 * it attempts to fetch it from the API. Errors encountered during this process are caught and alerted to the user.
 * 
 * @param {string} query - The search term used to filter books.
 * @returns {Promise<any>} A promise that resolves with the JSON data returned from the Open Library API, or cached data if available.
 */
export default async function getBooks(query: string) {
    // Check if the requested data is already cached to avoid making another API call.
    if (cache[query]) {
        return cache[query]; // Return cached data directly.
    }

    // Construct the URL for the API request using the provided search query.
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10&page=1`;

    try {
        // Send a GET request to the constructed URL.
        const response = await fetch(url);

        // Verify the response status to ensure the request was successful.
        if (!response.ok) {
            throw new Error(`Failed to fetch books: ${response.statusText}`);
        }

        // Parse the JSON response body and store it in the cache for future use.
        const data = await response.json();
        cache[query] = data; // Store the fetched data in the cache.

        // Return the parsed data.
        return data;
    } catch (error) {
        // Alert the user with the error message if an exception occurred.
        alert(error.message || 'An unexpected error occurred.');
    }
}