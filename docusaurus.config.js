/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'NeoAlgo',
  tagline: 'Bringing all Data Structures and Algorithms under one Roof ⚡',
  url: 'https://neoalgo.tesseractcoding.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Tesseract Coding', 
  projectName: 'NeoAlgo', 
  onBrokenLinks: 'ignore',
  plugins: ['@docusaurus/plugin-google-analytics'],
  // themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-194155806-1',
      anonymizeIP: true,
    },
    announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content:
        'We are looking for contributors. Please start <a target="_blank" rel="noopener noreferrer" href="https://github.com/TesseractCoding/NeoAlgo-Docs/issues">here</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42', 
      isCloseable: true,
    },
    colorMode: {
      defaultMode: 'light',
      switchConfig: {
        darkIcon: '🌙',
        darkIconStyle: {
          marginLeft: '2px',
        },
        lightIcon: '💡',
        lightIconStyle: {
          marginLeft: '1px',
        },
      }
    },
    navbar: {
      title: 'NeoAlgo',
      logo: {
        alt: 'Tesseract Coding Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
		{to: 'team', label: 'Team', position: 'left'},
        {
          href: 'https://github.com/TesseractCoding/NeoAlgo-Docs',
          label: 'GitHub',
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
              label: 'Getting Started',
              to: 'docs/',
              backgroundColor: '#fafbfc',
              textColor: '#ffffff', 
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/tesseract-coding',
            },
            {
              label: 'Discord',
              href: 'http://discord.tesseractcoding.com/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/TesseractCoding',
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
              href: 'https://github.com/TesseractCoding/NeoAlgo-Docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tesseract Coding; Built with Docusaurus.`,
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
            'https://github.com/TesseractCoding/NeoAlgo-Docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/TesseractCoding/NeoAlgo-Docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
