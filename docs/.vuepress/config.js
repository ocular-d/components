module.exports = {
  title: 'VuePress Components',
  description: 'Read my description ...',
  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/npm/redoc@next/bundles/redoc.standalone.js'}]
  ],

  themeConfig: {
    sidebar: [
      'beta-banner',
      'redoc',
      'teaser'
    ]
  }
}
