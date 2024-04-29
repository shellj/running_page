interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://running.shellj.com',
  logo: 'https://im.shellj.com/static/images/favicon.ico',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://im.shellj.com',
    },
    {
      name: 'Github',
      url: 'https://github.com/shellj',
    },
  ],
};

export default data;
