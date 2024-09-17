"use client";

import Link from 'next/link'
import { useState } from 'react';


function Navigation() {
 const [isNavTogleActive, setNavTogleActive]=useState(false)

    return <>
     <nav className={"text-center hidden md:flex   fixed top-0 left-0 w-full bg-inherit"} >
      <div className="container ">
     <div className='nav-mobile py-5 text-start md:hidden'>
       <i className={'fa  hidden fa-2xl'+ isNavTogleActive? "fa-rectangle-xmark":" fa-bars" } onClick={()=>setNavTogleActive(!isNavTogleActive)} ></i>
      {/* fa-rectangle-xmark */}
     </div>
      <ul className='    p-5 flex flex-col md:flex-row justify-start md:justify-around   text-start md:text-center  uppercase nav-style'>
      <li className='nav-active mb-5 md:mb-0 '><Link href="/"> Blog News</Link></li>
      <li className='mb-5 md:mb-0'><Link href="#"> Lifestyle</Link></li>
        <li className="mb-5 md:mb-0 "><Link href="#" > entertainment</Link></li>
         <li className="mb-5 md:mb-0"><Link href="#" > world</Link></li>
          <li className="mb-5 md:mb-0"><Link href="#" > sport</Link></li>
          <li className="mb-5 md:mb-0"><Link href="#" > travel</Link></li>
           <li className="mb-5 md:mb-0"><Link href="#" > technology</Link></li>
      </ul>
      </div>
    </nav>
    </>
    
}

export default Navigation