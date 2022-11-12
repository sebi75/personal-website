import React, {
  FunctionComponent,
  ReactNode,
  AnchorHTMLAttributes,
} from 'react';
import Link from 'next/link';

interface ICustomLinkType extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
}

export const CustomLink: FunctionComponent<ICustomLinkType> = ({
  children,
  href,
  ...props
}) => {
  const isRouteLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');
  const isExternalLink = href && href.startsWith('http');

  if (isRouteLink) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  } else if (isExternalLink) {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer' {...props}>
        {children}
      </a>
    );
  } else if (isAnchorLink) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }
};

export default CustomLink;
