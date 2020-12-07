const sidebarTree = require("./js/sidebarTree")
const { description } = require('../../package')

module.exports = {
  title: 'Artefact Docs',
  description: description,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#006FFF' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    repo: 'Artefact-Labs/doc',
    repoLabel: 'Contribute!',
    editLinks: false,
    docsDir: '',
    editLinkText: 'Help us improve this page!',
    lastUpdated: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start', link: '/introduction/' },
      { text: 'Webpages', items: [
        { text: 'Webpage', link: 'https://artefact-labs.com/' },
        { text: 'Community', link: 'https://community.artefact-labs.com/' }
      ] 
      },
    ],
    sidebar: sidebarTree.tree,
    sidebarDepth: 2,
    smoothScroll: true
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/last-updated',
    '@vuepress/medium-zoom',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
  ],  
  markdown: {
    lineNumbers: true
  }
}
