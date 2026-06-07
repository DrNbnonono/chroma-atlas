// scripts/copy-vendor.js — copy required UMD bundles from node_modules
// to vendor/ so the page can serve them locally without CDN access.

const fs = require('fs');
const path = require('path');

const copies = [
  ['node_modules/react/umd/react.production.min.js', 'vendor/react.production.min.js'],
  ['node_modules/react-dom/umd/react-dom.production.min.js', 'vendor/react-dom.production.min.js'],
  ['node_modules/@babel/standalone/babel.min.js', 'vendor/babel.min.js'],
];

fs.mkdirSync('vendor', { recursive: true });

for (const [src, dest] of copies) {
  if (!fs.existsSync(src)) {
    console.error(`✗ Missing: ${src}`);
    console.error(`  Run \`npm install\` first.`);
    process.exit(1);
  }
  fs.copyFileSync(src, dest);
  const size = fs.statSync(dest).size;
  console.log(`✓ ${dest} (${(size / 1024).toFixed(1)} KB)`);
}

console.log('\nAll vendor files copied. Start the server with: npm start');
