import React, { FunctionComponent } from 'react';

import { SocialIcons } from './SocialIcons';

export const Footer: FunctionComponent = () => {
  const year = new Date().getFullYear();
  return (
    <div className='mb-6 flex flex-col items-center justify-center'>
      <SocialIcons />
      <span className='mt-4 text-xs text-gray-800 dark:text-white'>
        &copy; {year} Sebastian Semeniuc
      </span>
    </div>
  );
};
