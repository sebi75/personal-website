import React, { FunctionComponent, ReactNode } from 'react';

import { Header } from 'components/Navigation';
import { Footer } from 'components/Footer';
import { WebsiteLayout } from './WebsiteLayout';

interface ILayoutWrapperProps {
  children: ReactNode;
}

export const LayoutWrapper: FunctionComponent<ILayoutWrapperProps> = ({
  children,
}) => {
  return (
    <WebsiteLayout>
      <div className='flex h-screen w-full flex-col justify-between items-center dark:bg-gray-800'>
        <Header />
        {children}
        <Footer />
      </div>
    </WebsiteLayout>
  );
};
