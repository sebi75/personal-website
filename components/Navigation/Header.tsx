import React, { FunctionComponent, useState } from 'react';

import clsx from 'clsx';
import { headerLinks } from 'config/headerLinks';
import Link from '../CustomLink';

import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';
import useDarkMode from 'hooks/useDarkMode';

import { BiMenu as HamburgerMenu } from 'react-icons/bi';
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';

export const Header: FunctionComponent = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode();

  const handleSwitchTheme = () => {
    setDarkMode((prev: boolean) => !prev);
  };

  const handleToggleMenu = () => {
    setIsOpened((prev: boolean) => !prev);
  };

  const websiteThemeIcon = darkMode ? (
    <BsFillSunFill
      className='cursor-pointer text-2xl dark:text-white'
      onClick={handleSwitchTheme}
    />
  ) : (
    <MdDarkMode
      className='cursor-pointer text-2xl dark:text-white'
      onClick={handleSwitchTheme}
    />
  );

  const mobileNavIcon = isOpened ? (
    <CloseIcon
      onClick={handleToggleMenu}
      className='ml-10 cursor-pointer text-3xl dark:text-white'
    />
  ) : (
    <HamburgerMenu
      onClick={handleToggleMenu}
      className='ml-10 cursor-pointer text-3xl dark:text-white'
    />
  );

  return (
    <header className='flex h-24 w-full items-center justify-center'>
      <div className='hidden h-14 items-center justify-center rounded-lg p-4 shadow-light-around-shadow sm:flex'>
        <LinksList />
        {websiteThemeIcon}
      </div>
      <div className='flex w-full items-center justify-end px-4 sm:hidden z-10'>
        {websiteThemeIcon}
        {mobileNavIcon}
        {isOpened && (
          <div className='fixed top-20 right-0 h-screen w-full bg-white dark:bg-gray-800'>
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
              'text-uppercase mr-4 p-2 text-base text-black dark:text-white',
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
