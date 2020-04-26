require("dotenv").config();
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  publicRuntimeConfig: {
    API: process.env.API,
  },
  exportTrailingSlash: true,
});
