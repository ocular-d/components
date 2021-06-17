module.exports = {
  title: 'VuePress Component Library',
  description: 'Enhance your content with components',
  base: '/components/',
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
    searchPlaceholder: 'Search...',
    repo: 'ocular-d/components',
    nav: [
      { text: 'Markdown Style Guide', link: 'https://ocular-d.github.io/styleguide-markdown/' },
      { text: 'Content Style Guide', link: 'https://editorial.ocular-d.tech//' }
    ],
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
            'upgrade',
            'header',
            'recommended-reading',
          ]

        },
        {
          title: 'Images',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            'image-ad',
            'browser-shot',
            'cards',
            'image'
          ]

        },
        {
          title: 'VuePress Container',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            'container'
          ]

        }
      ]
  },
plugins: [
  ['@vuepress/nprogress', true],
  ['vuepress-plugin-reading-time', true],
  ['@vuepress/back-to-top', true],
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
  ],
  [
    'vuepress-plugin-container',
    {
      type: 'flex-box',
      before: type => `<div class="flex-box ${type}">`,
      after: '</div>'
    }
  ],
  [
    'vuepress-plugin-container',
    {
      type: 'teaser',
      before: name => `<div class="teaser custom-block"><h2 class="custom-block-title">${name}</h2>`,
      after: '</div>',
    }
  ],
  [
    'vuepress-plugin-container',
    {
      type: 'flag',
      before: name => `<div class="flag"><code class="title" v-pre>${name}</code>`,
      after: '</div>',
    }
  ],
  [
    'vuepress-plugin-container',
    {
      type: 'outdated',
      before: (info) => `<div class="outdated"><p class="title">${info}</p>
          <p><strong>This part of the documentation is currently not up to date!</strong></p>`
        ,
        after: '</div>'
    }
  ],
  [
    'vuepress-plugin-container',
    {
      type: 'contribute',
      before: () => `<div class="tip custom-block">
          <p><strong>This section could use a little bit of love.</strong></p>
          <p>If you're able to, please consider helping the Vue Community by contributing a PR.</p>
          <p>You'll find a link to edit this page at the bottom.</p>`
        ,
        after: '</div>'
    }
  ],
  [
    'vuepress-plugin-container',
    {
      type: 'balloon-right',
      defaultTitle: '',
      before: info => `<div class="balloon-right"><div class="icon"><img src="https://ocular-d.github.io/components/logo.png"></div>${info}`,
      after: '</div>',
    },
  ],
  [
    'vuepress-plugin-container',
    {
      type: 'balloon-left',
      defaultTitle: '',
      before: info => `<div class="balloon-left"><div class="icon"><img src="https://ocular-d.github.io/components/logo.png"></div>${info}`,
      after: '</div>',
    },
  ],
]
}
