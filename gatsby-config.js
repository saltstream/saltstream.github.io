module.exports = {
  siteMetadata: {
    title: 'saltstream',
    description: `
      infrastructure automation by design
    `,
    charset: 'UTF-8',
    lang: `en`,
    siteUrl: `saltstream.io`,
    author: {
      name: 'Darrell Davis',
      minibio: `
        Manipulator of digital things, juggler, puppeteer, dad
      `,
      twitter: '@saltydarrell',
    },
    organization: {
      name: 'Saltstream Technology Advisors',
      url: 'saltstream.io',
      logo: 'saltstream.io/logo.png',
      phone: '717 884 9231',
      email: 'contact@saltstream.io',
      twitter: '@saltydarrell',
    },
    contact: {
      phone: '717 884 9231',
      email: 'contact@saltstream.io',
      twitter: '@saltydarrell',
    },
    menuLinks: [
      {
        name: 'Services',
        link: '/services',
      },
      {
        name: 'Testimonials',
        link: '/testimonials',
      },
      {
        name: 'Blog',
        link: '/blogs',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 970,
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-svg',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/pages/blogs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `services`,
        path: `${__dirname}/src/pages/services`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `testimonials`,
        path: `${__dirname}/src/pages/testimonials`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
//    {
//      resolve: `gatsby-plugin-typography`,
//      options: {
//        pathToConfigModule: `src/utils/typography`,
//      },
//    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-135918291-1",
        // Puts tracking script in the head instead of the body
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    // add manifest and offline mode if desired
  ],
}
