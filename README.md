# GPRO Docs for FGD and FGD Academy

Work in progress

## 🔥 Features

- Write using Markdown / [MDX](https://github.com/mdx-js/mdx)
- Syntax Highlighting using Prism [`Bonus`: Code diff highlighting]
- Search Integration with Algolia
- Google Analytics Integration
- Automatically generated sidebar navigation, table of contents, previous/next
- Rich embeds and live code editor using MDX

## 🔧 Configure

Write markdown files in `content` folder.

Open `config.js` for templating variables. Broadly configuration is available for `gatsby`, `header`, `sidebar` and `siteMetadata`.

- `gatsby` config for global configuration like
  - `pathPrefix` - Gatsby Path Prefix
  - `siteUrl` - Gatsby Site URL
  - `gaTrackingId` - Google Analytics Tracking ID

- `header` config for site header configuration like
  - `title` - The title that appears on the top left
  - `helpUrl` - Help URL for pointing to resources
  - `links` - Links on the top right
  - `search` - Enable search and [configure Algolia](https://www.gatsbyjs.org/docs/adding-search-with-algolia/)

- `sidebar` config for navigation links configuration
  - `forcedNavOrder` for left sidebar navigation order. It should be in the format "/<filename>"
  - `frontLine` - whether to show a front line at the beginning of a nested menu.(Collapsing capability would be turned of if this option is set to true)
  - `links` - Links on the bottom left of the sidebar
  - `ignoreIndex` - Set this to true if the index.md file shouldn't appear on the left sidebar navigation. Typically this can be used for landing pages.

- `siteMetadata` config for website related configuration
  - `title` - Title of the website
  - `description` - Description of the website
  - `ogImage` - Social Media share og:image tag
