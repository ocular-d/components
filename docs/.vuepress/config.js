module.exports = {
  title: 'VuePress Components Library',
  description: 'Read my description ...',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i'
  },],
  ['link', {
    rel: 'stylesheet',
    type: 'text/css',
    href: 'https://fonts.googleapis.com/css?family=Miriam+Libre:400,700'
},],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/redoc@next/bundles/redoc.standalone.js'}]
  ],

  themeConfig: {
    sidebar: [
      'beta-banner',
      'redoc',
      'teaser',
      'test-alert',
      'collapse',
      'pdf'
    ]
  }
}
