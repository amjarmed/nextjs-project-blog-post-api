import Link from 'next/link';
import Image from 'next/image';
import Data from './utils/data';
// import { Analytics } from '@vercel/analytics/react';

export default async function Home() {
  const posts = await Data();

  console.log('--------- start home page - ---------');
  console.log(posts.length);
  console.log('--------- end home page - ---------');

  return (
    <div className='container '>
      <div className=' grid grid-cols-1 md:grid-cols-2 place-items-start gap-4  mt-5  '>
        <div className='latest-post  '>
          <div className='latest-post text-'>
            <div className='post-thumb  '>
              <Image
                src='https://picsum.photos/600/400'
                alt='Description of the image'
                sizes='(max-width: 768px) 100vw, 50vw'
                width={600}
                height={400}
                className='w-full h-auto'
              />
            </div>
            <div className='post-meta-data'>
              <h1 className='text-lg'>
                <Link href={`/blog/${posts[0].id}`}>{posts[0].title}</Link>
              </h1>
              <p className='text-gray-600 py-2'>{posts[0].body}</p>
              <div className='flex justify-between py-5 w-11/12 mx-auto flex-nowrap gap-5 text-gray-500 border-t'>
                <p>
                  <i className='fa fa-clock -fa-lg'></i> {posts[0].publishedAt}
                </p>
                <p>
                  <i className='fa fa-comment -fa-lg'></i> Comments
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='posts-feed w-full   '>
          {
            <ul>
              {posts.map((post) => (
                <Link href={`/blog/${post.id}`} key={post.id}>
                  <div
                    className='latest-post border flex  mb-2 md:mb-4 flex-col md:flex-row  flex-nowrap justify-start items-start   gap-4 '
                    key={post.id}
                  >
                    <div className='post-thumb flex-none grow rounded w-full md:w-1/2'>
                      <Image
                        src={`${
                          post.image
                            ? post.image
                            : 'https://picsum.photos/400/200?grayscale'
                        }`}
                        alt='Description of the image'
                        sizes='(max-width: 768px) 100vw, 50vw'
                        width={400}
                        height={200}
                        className='w-full h-auto'
                      />
                    </div>
                    <div className='post-meta px-2 flex-auto grow py-2 text-sm  w-full md:w-1/2'>
                      <h6 className='mb-3'>{post.title}</h6>

                      <p className='text-gray-600 text-sm'>
                        {post.body.slice(0, 60)}
                      </p>
                      <div className='flex border-t flex-nowrap gap-5 py-3 mt-5 text-gray-500'>
                        <p className='w-1/2'>
                          <i className='fa fa-clock -fa-lg'></i> 15/02/2002
                        </p>
                        <p className='w-1/2'>
                          <i className='fa fa-comment -fa-lg'></i> Comments
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </ul>
          }
        </div>
      </div>
    </div>
  );
}
