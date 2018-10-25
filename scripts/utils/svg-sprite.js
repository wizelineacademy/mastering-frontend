// Import all SVG icons in /svg folder for Webpack to bundle them through the svg-sprite loader
function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('../../svg/', true, /\.svg$/));

// Load them asynchronously and insert them in the element with id 'icons-svg' in the DOM
fetch('./icons.svg')
  .then((res) => {
    return res.text();
  })
  .then((data) => {
    document.querySelector('#svg-icons').innerHTML = data;
  });