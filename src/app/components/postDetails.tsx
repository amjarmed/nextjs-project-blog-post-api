import Image from 'next/image';
import styles from '@/app/blog/[postId]/single.module.css';
import Icon from '@/app/components/FontAwesomeIcon';
import { getRandomNumber } from '@/app/utils/randomNumbers';
import Link from 'next/link';
import Data from '../utils/data';

interface PostDetailsProps {
  postId: number;
}
async function PostDetails({ postId }: PostDetailsProps) {
  // testing
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  //  data  api list --------------------------------
  const fullData = await Data();

  // main single post
  const posts = fullData.filter((obj) => obj.id === Number(postId));
  const post = posts[0];
  console.log('-----------single page------------');
  console.log(post);
  console.log('-----------single page end------------');
  // related posts (TODO: SLICE() SHOULD BE RANDOM, OR BASED ON CATEGORY)
  const rands = getRandomNumber();
  const relatedPosts = fullData.slice(rands, rands + 2);

  return (
    <div className='post-wrapper'>
      <div className='blog-hero relative'>
        <div className='hero-banner '>
          <Image
            src='https://picsum.photos/600/200'
            alt='Description of the image'
            sizes='(max-width: 768px) 768px, (max-width: 768px) 100vw, 50vw'
            width={768}
            height={200}
            className='w-full h-auto'
          />
        </div>
        <div className='hero-content absolute top-0 left-0 text-center  p-2 w-full h-full flex items-center justify-center bg-[rgb(10,10,10,0.7)]  '>
          <h1 className='lg:text-5xl uppercase '>
            {post.title.length != 0
              ? post.title
              : 'it is important to believe in your self'}
          </h1>
        </div>
      </div>
      <div className='container'>
        <article className='flex flex-col md:flex-row flex-nowrap items-stretch gap-4 p-5'>
          <aside className=' author-info basis-1/4  p-2 md:p-5 order-2 md:order-1'>
            <ul className={styles.asideList}>
              <li>
                {' '}
                <Icon
                  icon='calendar'
                  size='xs'
                  color='white'
                  className='w-4 inline'
                />{' '}
                <i> Posted in : 15/01/2024</i>
              </li>

              <li className='text-gray-600  text-start'>
                {' '}
                <Icon icon='tag' size='xs' className='w-4 inline' />{' '}
                {!post.tags
                  ? 'no tags'
                  : post.tags.map((tag) => (
                      <Link
                        href={`/blog/tag/${tag}`}
                        className='text-gray-600 '
                        key={tag}
                      >
                        {tag}
                      </Link>
                    ))}
              </li>
              <li>
                <Icon icon='user' size='xs' className='w-4 inline' />{' '}
                <i> Mohamed Amjar</i>
              </li>
              <li>
                <Image
                  src='https://avatar.iran.liara.run/public/10'
                  alt='Description of the image'
                  sizes='(max-width: 25px) 25px, (max-width: 768px) 10vw, 5vw'
                  width={25}
                  height={25}
                  className='w-1/4 h-auto mx-auto'
                />
              </li>
            </ul>
          </aside>
          <section className='md:order-2 content basis-9/12   p-2 md:p-5'>
            <p className='p-3 text-base'>{post.body}</p>

            {/* start related posts */}
            <div className='related-posts flex flex-col md:flex-row flex-auto gap-4 p-2 md:p-3 my-4 border-t'>
              {relatedPosts.map((post) => (
                <Link href={`/blog/${post.id}`} key={post.id}>
                  <div className='related-centent flex flex-1 gap-3'>
                    <Image
                      src={`${post.image}`}
                      alt='Description of the image'
                      width={100}
                      height={100}
                      className=' w-1/4 h-auto flex-grow-0'
                    />
                    <h4>{post.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
            <h3 className='py-3 my-3'> Leave A comment bellow </h3>
            {/* start comment form  */}
            <form action='./handles' method='get' className={styles.formStyle}>
              <label>
                <span>full Name </span>
                <input type='text' name='name' id='name' />
              </label>
              <label>
                <span>email :</span>
                <input type='email' name='email' id='email' />
              </label>
              <label>
                <span>comment </span>
                <textarea name='comment' id='comment'></textarea>
              </label>
              <button type='button'> Comment</button>
            </form>

            {/* start comments section  (comment inside comme ) */}
            <ul className='comments-list'>
              <li>
                <div className='flex justify-center items-start gap-4'>
                  <div className='user-thumb w-1/4'>
                    <Image
                      src='https://avatar.iran.liara.run/public/4'
                      alt='Description of the image'
                      sizes='(max-width: 25px) 25px, (max-width: 768px) 10vw, 5vw'
                      width={25}
                      height={25}
                      className='w-1/2 h-auto'
                    />
                  </div>
                  <div className='user-comment w-9/12 flex flex-col'>
                    <div className='user-original '>
                      <p className='mb-3 flex flex-col md:flex-row justify-between'>
                        <b>Mohamed Amjar</b> <span>15-02-2024</span>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Beatae, aperiam totam! Quia iste doloremque,
                      </p>
                    </div>
                    <div className='users-reply my-5'>
                      <ul>
                        <li>
                          <div className='flex justify-center items-start gap-4'>
                            <div className='user-thumb user-thumb w-1/4'>
                              <Image
                                src='https://avatar.iran.liara.run/public/5'
                                alt='Description of the image'
                                sizes='(max-width: 25px) 25px, (max-width: 768px) 10vw, 5vw'
                                width={25}
                                height={25}
                                className='w-1/2 h-auto'
                              />
                            </div>
                            <div className='user-comment  w-9/12 flex flex-col'>
                              <div className='user-original'>
                                <p className='mb-3 flex justify-between   flex-col md:flex-row'>
                                  <b>Mohamed Amjar</b> <span>15-02-2024</span>
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Beatae
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}

export default PostDetails;
