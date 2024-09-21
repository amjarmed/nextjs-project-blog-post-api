import Link from 'next/link';

function Footer() {
  return (
    <>
      <footer className=' text-center'>
        <div className='container  py-5'>
          <p>
            {' '}
            All rights Reserved - <Link href='/'>Blog Project</Link> &copy;
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
