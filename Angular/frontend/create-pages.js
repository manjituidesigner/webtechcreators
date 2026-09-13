const fs = require('fs');
const path = require('path');

function createComponent(name, routeName, sourceHtmlPath) {
    const html = fs.readFileSync(sourceHtmlPath, 'utf8');
    
    // Find where </header> ends
    const headerEndIndex = html.indexOf('</header>');
    if (headerEndIndex === -1) {
        console.error('Could not find </header> in ' + sourceHtmlPath);
        return;
    }
    
    // Find where <footer starts
    const footerStartIndex = html.indexOf('<footer');
    if (footerStartIndex === -1) {
        console.error('Could not find <footer in ' + sourceHtmlPath);
        return;
    }
    
    let templateHtml = html.substring(headerEndIndex + '</header>'.length, footerStartIndex).trim();
    
    // The breadcrumnd__section started before the header, so we need to prepend it
    templateHtml = '<section class="breadcrumnd__section">\n' + templateHtml;
    
    const componentCode = `import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var AOS: any;
declare var $: any;

@Component({
  selector: 'app-${name.toLowerCase()}',
  standalone: true,
  template: \`${templateHtml}\`
})
export class ${name}Component implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (typeof AOS !== 'undefined') {
        AOS.init({
          offset: 120,
          delay: 0,
          duration: 400,
          easing: 'ease',
          once: true,
          mirror: false,
          anchorPlacement: 'top-bottom',
        });
      }
      if (typeof $ !== 'undefined') {
        $(window).trigger('resize');
      }
    }
  }
}
`;
    
    const componentDir = path.join('src', 'app', 'pages', routeName);
    if (!fs.existsSync(componentDir)) {
        fs.mkdirSync(componentDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(componentDir, `${routeName}.component.ts`), componentCode);
    console.log(`Created ${name}Component in ${componentDir}`);
}

createComponent('Service', 'service', 'C:\\Users\\User\\Desktop\\webtechcreators-site\\mywebsite\\service.html');
createComponent('Contact', 'contact', 'C:\\Users\\User\\Desktop\\webtechcreators-site\\mywebsite\\contact.html');
