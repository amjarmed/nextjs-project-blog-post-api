import PostDetails from '@/app/components/postDetails';
import { Suspense } from 'react';

async function Single({ params }) {
  const postId = params.postId;

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
        <PostDetails postId={postId} />
      </Suspense>
    </>
  );
}

export default Single;
