module.exports = {
  title: 'Rebel Tools',
  tagline: 'The all-in-one toolset for progressive movements 🦋',
  url: 'https://docs.rebel.tools',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'activisthandbook', // Usually your GitHub org/user name.
  projectName: 'rebeltools-docs', // Usually your repo name.
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
              label: 'Developers docs',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
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
            'https://github.com/activisthandbook/rebeltools-docs/edit/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/activisthandbook/rebeltools-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
