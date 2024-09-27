import { log } from 'console';
import fetchData from './fetchData';

// Define the Post interface
interface Post {
      id: number;
  title: string;
  body: string;
  image?: string;
  publishedAt?: string;
  comments?: string;
  category?: string;
  tags?: string[];
  author?: string;
  description?: string;
  slug?: string;
  url?: string;
  type?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  _id?: string;
  
}
// Define the API response structure, where posts is an array of Post objects
interface ApiResponse {
  posts: Post[];
}

const Data= async  ():Promise<Post[]> =>{
 
    // Fetch data from the API (expecting a single ApiResponse object, not an array)
  const dommyjson=await fetchData<ApiResponse>('https://dummyjson.com/posts');
  

    const data: Post[] = !dommyjson ? [] : dommyjson.posts;
    console.log(data.length);
    
    
  // Return the posts array, or an empty array if there is no data
  return data.length > 0 ? data : [];
  

  
};
    
export default Data;