import React, { FunctionComponent, ReactNode } from 'react';

interface IWebsiteLayoutProps {
  children: ReactNode;
}

export const WebsiteLayout: FunctionComponent<IWebsiteLayoutProps> = ({
  children,
}) => {
  return (
    <div className='h-full w-full gradient-bg dark:bg-gray-800'>
      <div className='mx-auto p-3 max-w-4xl xl:max-w-5xl'>
        {children}
      </div>
    </div>
  );
};
