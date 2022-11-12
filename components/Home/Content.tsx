import React, { FunctionComponent } from 'react';

export const HomeContent: FunctionComponent = () => {
  return (
    <div className='w-full rounded-lg p-9 shadow-light-around-shadow sm:w-3/4'>
      <h1 className='mb-1 text-2xl dark:text-white'>
        Hello, I am Sebastian Semeniuc
      </h1>
      <p className='mb-4 text-xl font-bold dark:text-white'>
        Software Engineer
      </p>
      <p className='w-1/2 dark:text-white'>
        With a passion for engineering ever since I was a child, I have always
        been interested in how things work and how to build them
      </p>
    </div>
  );
};
