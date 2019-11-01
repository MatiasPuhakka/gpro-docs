const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://gpro-docs.netlify.com',
    gaTrackingId: 'UA-151319793-2'
  },
  header: {
    logo: '',
    logoLink: '',
    title: 'Test Docs',
    helpUrl: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY
    }
  },
  sidebar: {
    forcedNavOrder: [''],
    links: [{ text: '', link: '' }],
    frontline: false,
    ignoreIndex: true
  },
  siteMetadata: {
    title: 'Test Docs for FGD',
    description: 'Documentation built with md and coffee.',
    ogImage: null,
    docsLocation: '',
    favicon: ''
  }
}

module.exports = config
