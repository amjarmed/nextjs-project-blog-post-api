'use client';
import PostDetails from '@/app/components/postDetails';
import React, { Suspense } from 'react';

interface SingleProps {
  params: {
    postId: string;
  };
}
const Single: React.FC<SingleProps> = async ({ params }) => {
  const { postId } = params;

  // testing
  return (
    <>
      <Suspense
        fallback={
          <div className='flex items-center justify-center w-full min-h-dvh  p-5 text-center'>
            <p>Loading post details...</p>
          </div>
        }
      >
        <PostDetails postId={Number(postId)} />
      </Suspense>
    </>
  );
};

export default Single;
