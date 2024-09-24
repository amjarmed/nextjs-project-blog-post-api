interface FetchOptions extends RequestInit {
  next?: { revalidate?: number }; // Make revalidate optional
}

const fetchData = async <T = unknown>(
  url: string,
  options: FetchOptions = {}
): Promise<T | null> => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}. Status: ${response.status} ${response.statusText}`);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching data:', error.message);
    } else {
      console.error('Unexpected error fetching data:', error);
    }
    return null; // You could also return an empty object or throw the error based on your needs
  }
};

export default fetchData;
