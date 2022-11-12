import React, { FunctionComponent } from 'react';

import Link from '@/components/CustomLink';

const NotFound: FunctionComponent = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold dark:text-white'>404</h1>
      <p className='text-xl dark:text-white'>Page not found</p>
      <Link href='/' className='mt-4 text-blue-500'>
        Go back to home
      </Link>
    </div>
  );
};

export default NotFound;
