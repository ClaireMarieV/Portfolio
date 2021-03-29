const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImagesInDev: true,
      },
    ],
  ],
  {
    env: {
      FATHOM: process.env.FATHOM,
    },
    i18n: {
      // These are all the locales you want to support in
      // your application
      locales: ["en-US", "fr", "nl-NL"],
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: "en-US",
    },
  }
);
