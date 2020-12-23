module.exports = {
  title: 'VuePress Component Library',
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
        {
          title: 'Banner',   // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1
          children: [
            'beta-banner',
            'important',
            'disclaimer',
            'deprecated',
            'teaser',
            'test-alert'

          ]
        },
        {
          title: 'Media',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            'pdf',
            'youtube'
          ]

        },
        {
          title: 'API',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            'redoc',
          ]

        },
        {
          title: 'Content',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            'collapse',
            'features',
            'links',
            'upgrade'
          ]

        },
        {
          title: 'Images',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            'image-ad',
            'browser-shot'
          ]

        }
      ]
  },
plugins: [
  ['vuepress-plugin-container', {
    type: 'upgrade',
    before: info => `<UpgradePath title="${info}">`,
    after: '</UpgradePath>'
  }],
  [
    'vuepress-plugin-container',
    {
      type: 'left',
      defaultTitle: '',
    },
  ],
  [
    'vuepress-plugin-container',
    {
      type: 'right',
      defaultTitle: '',
    },
  ]
]
}
