const fs = require('fs');
const code = fs.readFileSync('src/App.tsx', 'utf8');
const svgMatch = code.match(/<svg[\s\S]*?<\/svg>/);
if (svgMatch) {
  let svg = svgMatch[0];
  svg = svg.replace('xmlnsXlink', 'xmlns:xlink');
  svg = svg.replace(/xlinkHref/g, 'xlink:href');
  fs.writeFileSync('public/logo.svg', svg);
}
