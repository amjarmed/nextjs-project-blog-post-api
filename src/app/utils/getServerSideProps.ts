// utils/getServerSidePropsUtil.ts

import { GetServerSidePropsContext } from 'next';

export async function getServerSidePropsUtil(context: GetServerSidePropsContext) {
  const { req } = context;

  // Access the current URL from the request object
  const currentUrl = req.url || ''; // This gives you the full URL

  return {
    props: {
      currentUrl, // Pass the current URL to your component
    },
  };
}
