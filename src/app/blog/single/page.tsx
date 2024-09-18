import Image from 'next/image';
import styles from './single.module.css';
import Icon from '@/app/components/FontAwesomeIcon';

function Single() {
  return (
    <div className='post-wrapper'>
      <div className='blog-hero relative'>
        <div className='hero-banner'>
          <Image
            src='https://picsum.photos/600/200'
            alt='Description of the image'
            sizes='(max-width: 768px) 768px, (max-width: 768px) 100vw, 50vw'
            width={768}
            height={200}
            className='w-full h-auto'
          />
        </div>
        <div className='hero-content absolute top-0 left-0 text-center  p-2 w-full h-full flex items-center justify-center bg-[rgb(10,10,10,0.7)] '>
          <h1 className='text-5xl'>
            {' '}
            it is important to believe in your self{' '}
          </h1>
        </div>
      </div>
      <div className='container'>
        <article className='flex flex-row flex-nowrap items-stretch gap-4 p-5'>
          <aside className=' author-info basis-1/4  p-2 md:p-5'>
            <ul className={styles.asideList}>
              <li>
                {' '}
                <Icon
                  icon='calendar'
                  size='xs'
                  color='gray'
                  className='w-4 inline'
                />{' '}
                <i> Posted in : 15/02/2015</i>
              </li>

              <li>
                {' '}
                <Icon icon='tag' size='xs' className='w-4 inline' />{' '}
                <i> news & politics</i>
              </li>
              <li>
                <Icon icon='user' size='xs' className='w-4 inline' />{' '}
                <i> Mohamed Amjar</i>
              </li>
              <li>
                <Image
                  src='https://avatar.iran.liara.run/public/4'
                  alt='Description of the image'
                  sizes='(max-width: 25px) 25px, (max-width: 768px) 10vw, 5vw'
                  width={25}
                  height={25}
                  className='w-full h-auto'
                />
              </li>
            </ul>
          </aside>
          <section className='content basis-9/12   p-2 md:p-5'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              modi veritatis eveniet impedit culpa unde excepturi delectus eos
              nemo consectetur quos aspernatur nam, quibusdam ducimus ipsam
              beatae facilis, qui soluta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              modi veritatis eveniet impedit culpa unde excepturi delectus eos
              nemo consectetur quos aspernatur nam, quibusdam ducimus ipsam
              beatae facilis, qui soluta.
            </p>
            {/* start related posts */}
            <div className='related-posts flex flex-auto gap-4 p-2 md:p-3 my-4 border-t'>
              <div className='related-centent flex flex-1 gap-3'>
                <Image
                  src='https://picsum.photos/600/200'
                  alt='Description of the image'
                  width={100}
                  height={100}
                  className=' w-1/4 h-auto flex-grow-0'
                />
                <h4>
                  {' '}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                  tempora odit
                </h4>
              </div>
              <div className='related-centent flex flex-1 gap-3'>
                <Image
                  src='https://picsum.photos/600/200'
                  alt='Description of the image'
                  width={100}
                  height={100}
                  className=' w-1/4 h-auto flex-grow-0'
                />
                <h4>
                  {' '}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                  tempora odit
                </h4>
              </div>
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
                      className='w-full h-auto'
                    />
                  </div>
                  <div className='user-comment w-9/12 flex flex-col'>
                    <div className='user-original '>
                      <p className='mb-3 flex justify-between'>
                        <b>Mohamed Amjar</b> <span>15-02-2024</span>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Beatae, aperiam totam! Quia iste doloremque, quaerat
                        ipsum fugiat voluptas, nihil, est soluta in molestias
                        porro pariatur odio vel delectus dolorem aut?
                      </p>
                    </div>
                    <div className='users-reply my-5'>
                      <ul>
                        <li>
                          <div className='flex justify-center items-start gap-4'>
                            <div className='user-thumb user-thumb w-1/4'>
                              <Image
                                src='https://avatar.iran.liara.run/public/3'
                                alt='Description of the image'
                                sizes='(max-width: 25px) 25px, (max-width: 768px) 10vw, 5vw'
                                width={25}
                                height={25}
                                className='w-full h-auto'
                              />
                            </div>
                            <div className='user-comment  w-9/12 flex flex-col'>
                              <div className='user-original'>
                                <p className='mb-3 flex justify-between'>
                                  <b>Mohamed Amjar</b> <span>15-02-2024</span>
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Beatae, aperiam totam! Quia
                                  iste doloremque, quaerat ipsum fugiat
                                  voluptas, nihil, est soluta in molestias porro
                                  pariatur odio vel delectus dolorem aut?
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

export default Single;
