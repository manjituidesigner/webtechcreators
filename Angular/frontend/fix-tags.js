const fs = require('fs');
let code = fs.readFileSync('src/app/pages/home/home.component.ts', 'utf8');
code = code.replace('template: `', 'template: `\n<section class="banner__section">');
fs.writeFileSync('src/app/pages/home/home.component.ts', code);
