require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'InstaResume',
    siteUrl: 'https://instaresume.jackjona.live',
    description: 'A Free And Instant Resume Builder Web Application',
    version: '2.7.8',
  },
  flags: { 
    PRESERVE_WEBPACK_CACHE: true, 
    THE_FLAG: false
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public|_this_is_virtual_fs_path_)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'InstaResume',
        short_name: 'InstaResume',
        start_url: '/',
        background_color: '#212121',
        icon: `static/images/logo.png`,
        orientation: 'landscape',
        theme_color: '#212121',
        display: 'standalone',
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Lato',
              variants: ['400', '700'],
              subsets: ['latin-ext'],
            },
            {
              family: 'Montserrat',
              variants: ['400', '500', '600', '700'],
              subsets: ['latin-ext'],
            },
            {
              family: 'Nunito',
              variants: ['400', '600', '700'],
              subsets: ['latin-ext'],
            },
            {
              family: 'Open Sans',
              variants: ['400', '600', '700'],
              subsets: ['latin-ext'],
            },
            {
              family: 'Raleway',
              variants: ['400', '500', '700'],
              subsets: ['latin-ext'],
            },
            {
              family: 'Rubik',
              variants: ['400', '500', '700'],
              subsets: ['latin-ext'],
            },
            {
              family: 'Source Sans Pro',
              variants: ['400', '600', '700'],
              subsets: ['latin-ext'],
            },
            {
              family: 'Titillium Web',
              variants: ['400', '600', '700'],
              subsets: ['latin-ext'],
            },
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: { prefixes: ['/app/*'] },
    },
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: `${__dirname}/src/articles`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images/`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_APIKEY,
          authDomain: process.env.FIREBASE_AUTHDOMAIN,
          databaseURL: process.env.FIREBASE_DATABASEURL,
          projectId: process.env.FIREBASE_PROJECTID,
          storageBucket: process.env.FIREBASE_STORAGEBUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
          appId: process.env.FIREBASE_APPID,
        },
      },
    },
    'gatsby-plugin-sitemap',
  ],
};
