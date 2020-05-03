const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    publicRuntimeConfig:{
        APP_NAME: 'NBA Static',
        PRODUCTION: false,
        DOMAIN_DEVELOPMENT: 'http://localhost:3000',
        DOMAIN_PRODUCTION: 'https://nbaStatic.com',
    }
})