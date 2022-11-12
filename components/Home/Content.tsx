import React, { FunctionComponent, ReactNode } from 'react';
import clsx from 'clsx';

import Image from 'next/image';

export const HomeContent: FunctionComponent = () => {
  return (
    <div className='flex flex-col w-full rounded-lg text-white p-20 m-5 shadow-light-around-shadow'>
      <div>
          <div className='mb-5 flex flex-row items-center'>
            <h1 className='text-3xl text-white uppercase'>
              Sebastian Semeniuc
            </h1>
            <AvatarComponent />
          </div>
      <p className='mb-4 text-xl font-bold text-white'>
        Software Engineer
      </p>
      <ul className='m-2 w-full md:w-3/4'>
        <ListItem>
          Sebastian is a software engineer with a passion for building scalable and maintainable software. He has experience in building web and mobile fullstack applications.
        </ListItem>
        <ListItem>
          He is currently working as a software engineer at <a href='https://www.fortech.ro/' className='text-blue-600 font-bold underline' target='_blank' rel='noreferrer'>Fortech</a> where he is contributing to migrating the platform of a large American marketing company from Angular to React. Him and the team are tackling the challenge of building a scalable, performant and maintainable frontend architecture for the platform, following agile methodologies.
        </ListItem>
        <ListItem>
          He is currently also a computer science student at Babes Bolyai University, Cluj-Napoca, Romania, and in his remaining free time his activities include connecting with nature, learning new tech things and reading books on different subjects he finds interesting.
        </ListItem>
      </ul>
      </div>
    </div>
  );
};

const AvatarComponent = () => {
 return <div className='w-20 h-20 ml-3 relative'>
      <Image fill className='rounded-full' alt='Sebastian Semeniuc' src={'/me.jpeg'}></Image>
      </div>
}

interface IListItemProps {
  children: ReactNode;
  className?: string;
}

const ListItem: FunctionComponent<IListItemProps> = ({ children, className }) => {
  return (
    <li className={clsx('text-white bullet list-disc m-3', className)}>
      {children}
        </li>
  )
}
