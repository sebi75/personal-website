export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  email = 'email',
}

export interface IContactLinkTypes {
  linkedin: string;
  github: string;
  email: string;
}

export const ContactLinks: IContactLinkTypes = {
  linkedin: 'https://www.linkedin.com/in/sebastian-semeniuc-17136321a/',
  github: 'https://github.com/sebi75',
  email: 'mailto:sebisemeniuc@gmail.com',
};
