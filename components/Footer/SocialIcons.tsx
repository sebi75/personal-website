import React, { FunctionComponent, ReactNode, memo } from 'react';
import clsx from 'clsx';

import { Tuple, Optional } from 'types';

/* icons */
import { IconBaseProps } from 'react-icons';
import { IoLogoGithub as GithubIcon } from 'react-icons/io';
import { FaLinkedinIn as LinkedInIcon } from 'react-icons/fa';
import { SiGmail as GmailIcon } from 'react-icons/si';

import { ContactLinks, ContactType } from 'config/contactLinks';

interface ISocialIconsProps {
  className?: string;
}

export const SocialIcons: FunctionComponent<ISocialIconsProps> = ({
  className,
}) => {
  return (
    <div className={clsx('flex', className)}>
      {Object.entries(ContactLinks).map(mapToIcon)}
    </div>
  );
};

const mapToIcon = (entry: Tuple<string>): ReactNode => {
  const [key, value] = entry;

  const props: IconBaseProps = {
    className: 'icon cursor-pointer text-3xl mr-6',
    color: socialIconsColors[key],
  };

  let icon: Optional<ReactNode>;
  switch (key) {
    case ContactType.github:
      icon = <GithubIcon {...props} />;
      break;
    case ContactType.linkedin:
      icon = <LinkedInIcon {...props} />;
      break;
    case ContactType.email:
      icon = <GmailIcon {...props} />;
      break;
    default:
      break;
  }

  return (
    <a
      className='social-icon'
      href={value}
      key={key}
      rel='noopener noreferrer'
      target='_blank'
    >
      {icon}
    </a>
  );
};

const socialIconsColors = {
  linkedin: '#0077B5',
  twitter: '#1DA1F2',
  youtube: '#FF0000',
  email: '#D44638',
  facebook: '#1877f2',
};
