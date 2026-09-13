const fs = require('fs');
let code = fs.readFileSync('src/app/pages/home/home.component.ts', 'utf8');

const replacement = `
import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var AOS: any;
declare var $: any;
declare var Odometer: any;

@Component({
  selector: 'app-home',
  standalone: true,
  template: \`$1\`
})
export class HomeComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize AOS Animations
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

      // Re-initialize any jQuery plugins like Magnific Popup or Swiper if needed
      if (typeof $ !== 'undefined') {
        // Example: trigger a resize to fix layouts
        $(window).trigger('resize');
      }

      // Initialize the console text animation
      this.initConsoleText(
        ['Wordpress', 'Ecommerce', 'Web Application', 'Mobile Apps', 'Branding', 'Logo Design', 'Print Media', 'Video Editing', 'Social Media', ' SEO'],
        'text',
        ['tomato','rebeccapurple','lightblue']
      );
    }
  }

  initConsoleText(words: string[], id: string, colors?: string[]) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var target = document.getElementById(id);
    if (!con || !target) return;

    var letterCount = 1;
    var x = 1;
    var waiting = false;
    
    target.setAttribute('style', 'color:' + colors[0]);
    
    window.setInterval(function() {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target!.innerHTML = words[0].substring(0, letterCount);
        window.setTimeout(function() {
          var usedColor = colors!.shift();
          colors!.push(usedColor as string);
          var usedWord = words.shift();
          words.push(usedWord as string);
          x = 1;
          letterCount += x;
          waiting = false;
        }, 300);
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function() {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 300);
      } else if (waiting === false) {
        target!.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);

    window.setInterval(function() {
      if (visible === true) {
        con!.className = 'console-underscore hidden';
        visible = false;
      } else {
        con!.className = 'console-underscore';
        visible = true;
      }
    }, 400);
  }
}
`;

// Extract everything inside template: `...`
const templateMatch = code.match(/template:\s*`([\s\S]*?)`\s*\}\)/);
if (templateMatch && templateMatch[1]) {
    const newCode = replacement.replace('$1', templateMatch[1]);
    fs.writeFileSync('src/app/pages/home/home.component.ts', newCode);
    console.log('Fixed HomeComponent');
} else {
    console.log('Could not find template');
}
