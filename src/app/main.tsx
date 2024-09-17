import Image from 'next/image';

export default function Main() {
  return (
    <div className='container '>
    <div className="flex flex-row gap-4  mt-5  ">
        <div className="latest-post  w-1/2"> 

            <div className="latest-post text-">
               <div className="post-thumb bg-green-950 ">
                 <Image src="https://picsum.photos/600/400" 
               alt="Description of the image" 
               sizes="(max-width: 768px) 100vw, 50vw" width={600} height={400}/>
               </div>
              <div className="post-meta-data">
                 <h1 className='text-lg'> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
               <p className='text-gray-600 py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi reiciendis natus illo vel. Accusamus autem assumenda nulla delectus quod voluptatem at. Distinctio, eum illum velit voluptatum dolore sequi ex quidem.</p>
               <div className='flex justify-between py-5 w-11/12 mx-auto flex-nowrap gap-5 text-gray-500 border-t'>
<p><i className='fa fa-clock -fa-lg'></i>  15/02/2002</p>
<p><i className='fa fa-comment -fa-lg'></i> Comments</p>
               </div>
              </div>
            </div>
        </div>
        <div className="posts-feed  w-1/2">   
         <div className="latest-post flex mb-2 md:mb-4   flex-nowrap justify-start items-start   gap-4 ">
               <div className="post-thumb flex-none grow rounded">
                 <Image src="https://picsum.photos/600/400" 
               alt="Description of the image"
               sizes="(max-width: 768px) 100vw, 50vw" width={200} height={100}/>
               </div>
              <div className="post-meta flex-auto grow py-2 text-sm ">
                 <h6 className='mb-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h6>
               <p className='text-gray-600 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi reiciendis natus illo vel. Accusamus</p>
               <div className='flex border-t flex-nowrap gap-5 py-3 mt-5 text-gray-500'>
<p className='w-1/2'><i className='fa fa-clock -fa-lg'></i>  15/02/2002</p>
<p className='w-1/2'><i className='fa fa-comment -fa-lg'></i> Comments</p>
               </div>
              </div>
            </div>
      <div className="latest-post flex mb-2 md:mb-4   flex-nowrap justify-start items-start   gap-4 ">
               <div className="post-thumb flex-none grow rounded">
                 <Image src="https://picsum.photos/600/400" 
               alt="Description of the image"
               sizes="(max-width: 768px) 100vw, 50vw" width={200} height={100}/>
               </div>
              <div className="post-meta flex-auto grow py-2 text-sm ">
                 <h6 className='mb-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h6>
               <p className='text-gray-600 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi reiciendis natus illo vel. Accusamus</p>
               <div className='flex border-t flex-nowrap gap-5 py-3 mt-5 text-gray-500'>
<p className='w-1/2'><i className='fa fa-clock -fa-lg'></i>  15/02/2002</p>
<p className='w-1/2'><i className='fa fa-comment -fa-lg'></i> Comments</p>
               </div>
              </div>
            </div>

                    <div className="latest-post flex mb-2 md:mb-4   flex-nowrap justify-start items-start   gap-4 ">
               <div className="post-thumb flex-none grow rounded">
                 <Image src="https://picsum.photos/600/400" 
               alt="Description of the image"
               sizes="(max-width: 768px) 100vw, 50vw" width={200} height={100}/>
               </div>
              <div className="post-meta flex-auto grow py-2 text-sm ">
                 <h6 className='mb-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h6>
               <p className='text-gray-600 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi reiciendis natus illo vel. Accusamus</p>
               <div className='flex border-t flex-nowrap gap-5 py-3 mt-5 text-gray-500'>
<p className='w-1/2'><i className='fa fa-clock -fa-lg'></i>  15/02/2002</p>
<p className='w-1/2'><i className='fa fa-comment -fa-lg'></i> Comments</p>
               </div>
              </div>
            </div>
                               
            
            </div>
    </div>
    
    </div>
  );
}

