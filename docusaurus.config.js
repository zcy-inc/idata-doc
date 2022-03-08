// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'idata',
  favicon: 'img/favicon.ico',
  url: 'https://zcy-inc.github.io',
  tagline:  'IData是一个现代化的大数据开发管理平台，提供完整的大数据开发流程，关注并聚焦于数据的全链路生命周期，便捷高效的满足大数据开发需求。',
  baseUrl: '/idata/',
  projectName: 'idata',
  organizationName: 'zcy-inc',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch:"deployment",
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    navbar: {
      logo: {
        alt: 'idata',
        src: '/idata/img/logo.svg'
      },
      items: [
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  }),
};

module.exports = config;
