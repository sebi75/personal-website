type ILink = {
  label: string;
  href: string;
};

type IHeaderLinks = {
  home: ILink;
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
  contact: {
    label: 'Contact',
    href: '/contact',
  },
  projects: {
    label: 'Projects',
    href: '/projects',
  },
};
