'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Icon from './FontAwesomeIcon';
import Image from 'next/image';

function Navigation() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const [isNavTogleActive, setNavTogleActive] = useState(true);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [0]);

  return (
    <>
      <nav
        className={
          'text-center z-10 md:flex bg-green-100   fixed top-0 left-0 w-full bg-inherit'
        }
      >
        <div className='container '>
          <div className='nav-mobile px-4 h-20 flex items-center justify-between  w-full md:hidden'>
            <div className='blog-logo '>
              <Link href='/'>
                <Image
                  src='https://avatar.iran.liara.run/public/4'
                  alt='Description of the image'
                  sizes='(max-width: 25px) 25px, (max-width: 768px) 10vw, 5vw'
                  width={25}
                  height={25}
                  className='w-1/2 h-auto'
                />
              </Link>
            </div>
            <div className='blog-action '>
              <button className='bg-black text-neutral-50 p-2 rounded self-end w-full'>
                {' '}
                Sign up
              </button>
            </div>
            <div
              className='blog-show-nav'
              onClick={() => {
                setNavTogleActive(!isNavTogleActive);
              }}
            >
              <Icon icon='bars' size='xl' className='w-4 inline' />
            </div>
          </div>

          <ul
            className={
              windowWidth < 768 && isNavTogleActive
                ? 'hidden'
                : 'flex p-5  flex-col md:flex-row justify-start md:justify-around   text-start md:text-center  uppercase nav-style  min-h-screen md:min-h-fit transition-all'
            }
          >
            <li className='nav-active mb-5 md:mb-0 '>
              <Link href='/'> Blog News</Link>
            </li>
            <li className='mb-5 md:mb-0'>
              <Link href='./blog/single'> Lifestyle</Link>
            </li>
            <li className='mb-5 md:mb-0 '>
              <Link href='#'> entertainment</Link>
            </li>
            <li className='mb-5 md:mb-0'>
              <Link href='#'> world</Link>
            </li>
            <li className='mb-5 md:mb-0'>
              <Link href='#'> sport</Link>
            </li>
            <li className='mb-5 md:mb-0'>
              <Link href='#'> travel</Link>
            </li>
            <li className='mb-5 md:mb-0'>
              <Link href='#'> technology</Link>
            </li>
            <li className='mb-5 md:mb-0 md:hidden'>
              <button className='bg-black text-neutral-50 p-2 rounded-lg w-full'>
                {' '}
                Sign up
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
