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
  themeConfig: {
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
