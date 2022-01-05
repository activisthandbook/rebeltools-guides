module.exports = {
  // support: [
  //   {
  //     type: 'doc',
  //     id: 'support/introduction',
  //   }
  // ],
  dev: [
    {
      type: 'doc',
      id: 'dev/introduction',
    },
    {
      type: 'category',
      label: 'Contributing ❤️',
      items: [
        {
          type: 'doc',
          id: 'dev/contribute/get-started',
        },
        {
          type: 'doc',
          id: 'dev/contribute/roadmap',
        },
        {
          type: 'category',
          label: 'Tech stack',
          items: ['dev/contribute/tech-stack/decisions', 'dev/contribute/tech-stack/client', 'dev/contribute/tech-stack/server', 'dev/contribute/tech-stack/documentation', 'dev/contribute/tech-stack/repositories']
        },
      ],
    },
    {
      type: 'category',
      label: 'Self hosting 🌐',
      items: ['dev/self-hosting/get-started', 'dev/self-hosting/setup', 'dev/self-hosting/customise' ],
    },
  ],
};
// module.exports = {
//   someSidebar: {
//     'Rebel Tools 🦋': ['rebel-tools/introduction', 'rebel-tools/contribute', 'rebel-tools/join', 'rebel-tools/roadmap'],
//     'User guides 📕': ['support/introduction'],
//     'Developer docs 👩‍💻': ['dev/introduction', 'dev/front-end', 'dev/back-end', 'dev/documentation'],
//     'Set up self-hosting 🛠': ['self-hosting/introduction'],
//   },
// };
