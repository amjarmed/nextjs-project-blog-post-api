import Link from 'next/link';
import Image from 'next/image';
import Data from './utils/data';
import Icon from './components/FontAwesomeIcon';

export default async function Home() {
  const posts = await Data();
  const asidePosts = posts.slice(0, 3);
  console.log('--------- start home page  ---------');
  console.log(posts.length);
  console.log('--------- end home page - ----------');

  return (
    <div className='container '>
      <div className=' grid grid-cols-1 md:grid-cols-2 place-items-start gap-4 bg-red-700  '>
        <div className='latest-post   '>
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
              <div className='flex justify-between pt-2 w-11/12 mx-auto flex-nowrap gap-5 text-gray-500 border-t'>
                <p>
                  <Icon icon='calendar' />
                  {posts[0].publishedAt?.length === 0
                    ? '15/09/2022'
                    : posts[0].publishedAt}
                </p>
                <p>
                  <Icon icon='comment' /> Comments
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='posts-feed w-full   '>
          {
            <ul>
              {asidePosts.map((post) => (
                <Link href={`/blog/${post.id}`} key={post.id}>
                  <div
                    className='latest-post  flex gap-2  mb-2 md:mb-4 flex-col md:flex-row  flex-nowrap justify-start md:justify-center h-full items-start  md:items-stretch '
                    key={post.id}
                  >
                    <div className='post-thumb   w-full md:w-1/2 max-h-fit '>
                      <Image
                        src={`${
                          post.image
                            ? post.image
                            : 'https://picsum.photos/400/240'
                        }`}
                        alt='Description of the image'
                        sizes='(max-width: 768px) 100vw, 50vw'
                        width={400}
                        height={200}
                        className='w-full h-auto'
                      />
                    </div>
                    <div className='post-meta p-1 flex-auto   w-full md:w-1/2  max-h-fit'>
                      <h6 className='mb-1'>{post.title}</h6>

                      <p className='text-gray-600 '>{post.body.slice(0, 60)}</p>
                      <div className='flex border-t flex-nowrap mt-2 md:mt-4 py-2 text-gray-500'>
                        <p className='w-1/2'>
                          <Icon icon='calendar' className='inline' /> 15/02/2002
                        </p>
                        <p className='w-1/2'>
                          <Icon icon='comment' className='inline' />
                          Comments
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
