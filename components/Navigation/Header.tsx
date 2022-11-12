import React, { FunctionComponent, useState } from 'react';

import clsx from 'clsx';
import { headerLinks } from 'config/headerLinks';
import Link from '../CustomLink';

import { BiMenu as HamburgerMenu } from 'react-icons/bi';
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';

export const Header: FunctionComponent = () => {
  const [isOpened, setIsOpened] = useState(false);


  const handleToggleMenu = () => {
    setIsOpened((prev: boolean) => !prev);
  };

  const mobileNavIcon = isOpened ? (
    <CloseIcon
      onClick={handleToggleMenu}
      className='ml-10 cursor-pointer text-3xl text-white z-10'
    />
  ) : (
    <HamburgerMenu
      onClick={handleToggleMenu}
      className='ml-10 cursor-pointer text-3xl text-white'
    />
  );

  return (
    <header className='flex h-24 w-full items-center justify-center'>
      <div className='hidden h-14 items-center justify-center rounded-lg p-4 shadow-light-around-shadow sm:flex'>
        <LinksList />
      </div>
      <div className='flex w-full items-center justify-end px-4 sm:hidden z-10'>
        {mobileNavIcon}
        {isOpened && (
          <div className='fixed top-0 right-0 h-screen w-full glassmorphism'>
            <div className='flex flex-col items-center justify-center p-24'>
              <LinksList className='text-2xl m-6' onPress={handleToggleMenu} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

interface ILinksListProps {
  className?: string;
  onPress?: () => void;
}

const LinksList: FunctionComponent<ILinksListProps> = ({
  className,
  onPress,
}) => {
  return (
    <>
      {Object.keys(headerLinks).map(key => {
        return (
          <Link
            href={headerLinks[key].href}
            key={key}
            className={clsx(
              'text-uppercase mr-4 p-2 text-base text-white dark:text-white',
              className,
            )}
            onClick={onPress}
          >
            {headerLinks[key].label}
          </Link>
        );
      })}
    </>
  );
};
