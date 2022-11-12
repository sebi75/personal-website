type ILink = {
  label: string;
  href: string;
};

type IHeaderLinks = {
  home: ILink;
  about: ILink;
  contact: ILink;
  blog: ILink;
  projects: ILink;
};

export const headerLinks: IHeaderLinks = {
  home: {
    label: 'Home',
    href: '/',
  },
  blog: {
    label: 'Blog',
    href: '/blog',
  },
  about: {
    label: 'About',
    href: '/about',
  },
  contact: {
    label: 'Contact',
    href: '/contact',
  },
  projects: {
    label: 'Projects',
    href: '/projects',
  },
};
