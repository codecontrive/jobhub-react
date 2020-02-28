
const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    [optimizedImages, {
        handleImages: ['jpeg', 'png'],
    }],
    [withCSS, {
      cssModules: true,
    }],
    
]);
