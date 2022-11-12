import React, { FunctionComponent } from 'react';

import { SocialIcons } from './SocialIcons';

export const Footer: FunctionComponent = () => {
  const year = new Date().getFullYear();
  return (
    <div className='mb-6 flex flex-col items-center justify-center'>
      <SocialIcons />
      <span className='text-xs mt-2 text-white dark:text-white'>
        &copy; {year} Sebastian Semeniuc
      </span>
    </div>
  );
};
