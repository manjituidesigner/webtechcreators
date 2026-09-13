const fs = require('fs');
const path = require('path');

const htmlPath = 'C:/Users/User/Desktop/webtechcreators-site/mywebsite/index.html';
const html = fs.readFileSync(htmlPath, 'utf8');

// The header in index.html is actually wrapped inside <section class="banner__section"> <header>...</header>
// So we need to carefully extract everything after </header> up to <footer>
// Wait, the banner section includes the header but also banner content!
// Let's find exactly </header> and <footer
const headerEndIdx = html.indexOf('</header>') + 9;
const footerStartIdx = html.indexOf('<footer');

let mainContent = html.substring(headerEndIdx, footerStartIdx).trim();

// Escape backticks and template literal expressions
mainContent = mainContent.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

const componentCode = `import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: \`
    ${mainContent}
  \`
})
export class HomeComponent { }
`;

const outDir = 'c:/Users/User/Desktop/kalyan_drive/webtech-creators/Angular/frontend/src/app/pages/home';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'home.component.ts'), componentCode);
console.log('HomeComponent created successfully.');
