import Link from 'next/link';

function Footer() {
  return (
    <>
      <footer className=' text-center '>
        <div className='container py-2 md:py-0 bg-yellow-400'>
          <p>
            {' '}
            All rights Reserved -{' '}
            <Link href='https://www.amjarmed.com/'>amjarmed.com</Link> &copy;
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
