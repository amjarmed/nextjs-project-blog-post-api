
const fetchData= async <T=unknown>(url: string):Promise<T | null> => {
  
  try {
    const response= await fetch(url, {
      next: {
        revalidate: 10
      }
    });
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
    return null; 
    
  }
};


export default fetchData;
