module.exports = {
  title: 'Rebel Tools',
  tagline: 'The all-in-one toolset for progressive movements 🦋',
  url: 'https://guides.rebel.tools',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'activisthandbook', // Usually your GitHub org/user name.
  projectName: 'rebeltools-guides', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Rebel Tools',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Guides 📖',
          position: 'left',
        },
        { to: 'blog', label: 'Blog ✨', position: 'left'},
        {
          href: 'https://rebel.tools',
          label: 'Open App 🔗',
          position: 'right',
        },
        {
          href: 'https://github.com/activisthandbook/rebeltools',
          label: 'GitHub 💻',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'User guide',
              to: 'docs/',
            },
            {
              label: 'Developer docs',
              to: 'docs/',
            },
            {
              label: 'Set up self-hosting',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Join us',
              href: 'http://activism.rocks/rebeltools',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'Instagram',
              href: 'https://instagram.com/activisthandbook',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/activisthandbook',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/activistbook',
            },
          ],
        },
      ],
      copyright: `Built by the Activist Handbook community`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/activisthandbook/rebeltools-guides/edit/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/activisthandbook/rebeltools-guides/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
