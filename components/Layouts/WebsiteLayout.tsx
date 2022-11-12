import React, { FunctionComponent, ReactNode } from 'react';

interface IWebsiteLayoutProps {
  children: ReactNode;
}

export const WebsiteLayout: FunctionComponent<IWebsiteLayoutProps> = ({
  children,
}) => {
  return (
    <div className='h-full w-full light:bg-gradient-bg dark:bg-gray-800'>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
        {children}
      </div>
    </div>
  );
};
