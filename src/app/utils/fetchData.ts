// lib/fetchData.ts

// Define the shape of the options object. Since it's optional, we default to an empty object.
interface FetchOptions extends RequestInit {
  next?: { revalidate: number }; // Add specific Next.js option if needed
}

// The return type is defined as 'any' for now, but you can type it more strictly based on your API's response.
const fetchData = async <T = any,>(
  url: string,
  options: FetchOptions = {},
): Promise<T | null> => {
  try {
    const response = await fetch(url, options);

    // Check if the response is OK, throw an error if not
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }

    // Await the JSON response, typed as generic `T`
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Fallback if the request fails
  }
};

export default fetchData;
