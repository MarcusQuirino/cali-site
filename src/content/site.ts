export const site = {
  writer: {
    name: 'Everayy',
    tagline: 'Commissioned fiction, written to order.',
    intro:
      "hello! i'm a brazilian trans writer majoring in creative writing. commission information and terms of service below.",
  },
  queueUrl: 'https://trello.com/b/jmPMMy3n/everayy-commissions',
  nav: [
    { label: 'Samples & Pricing', href: '/samples-pricing' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Contact', href: '/contact' },
  ],
  socials: [
    { name: 'Twitter', href: 'https://x.com/everayy', handle: '@everayy' },
    {
      name: 'Tumblr',
      href: 'https://www.tumblr.com/blog/everayy',
      handle: 'everayy',
    },
    {
      name: 'AO3',
      href: 'https://archiveofourown.org/users/everayy',
      handle: 'everayy',
    },
    { name: 'Ko-fi', href: 'https://ko-fi.com/everayy', handle: 'everayy' },
    { name: 'Straw.page', href: 'https://straw.page/draw', handle: 'draw' },
  ],
} as const;
