let config = {
  parser: 'postcss-scss',
  plugins: [
      require('postcss-import'),
      require('postcss-mixins'),
      require('postcss-advanced-variables'),
      require('postcss-nested'),
      require('postcss-preset-env')({
          stage: 3,
          features: {
              'nesting-rules': true,
              'custom-media-queries': true,
              'media-query-ranges': true,
              'hexadecimal-alpha-notation': true
          }
      }),
      require('autoprefixer')
  ]
};

module.exports = ctx => {
  if(ctx.env == 'production') {
      config.plugins.push(require('cssnano')); 
  }

  return config;
};