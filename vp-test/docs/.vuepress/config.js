module.exports = {
  plugins: [
    [
      'vuepress-plugin-container',
      {
        type: 'cool',
        defaultTitle: '',
      },
    ]
  ],
  themeConfig: {
    searchPlaceholder: 'Search...',
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' }
    ]
  }
}
