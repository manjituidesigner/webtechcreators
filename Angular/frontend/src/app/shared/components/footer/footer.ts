import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteSettingsService, SiteSettings } from '../../../core/services/site-settings.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
<footer class="footer__section">
   <div class="container">
      <div class="footer__top pt-120 pb-120">
         <div class="fl" data-aos="fade-up" data-aos-duration="1000">
            Get In Touch
         </div>
         <div class="row g-4">
            <div class="col-lg-6">
               <div class="get__content">
                  <p>
                     {{ settings?.footerDescription || 'Hello, We are WebTech Creators, Website & User Interface Developer based in Chandigarh.' }}
                  </p>
                  <a [href]="'mailto:' + settings?.contactEmail">{{ settings?.contactEmail || 'info@webtechcreators.com' }}</a>
               </div>
            </div>
            <div class="col-lg-6">
               <div class="get__rightcontetn">
                  <div class="row g-4">
                     <div class="col-lg-6 col-md-6 col-sm-6" *ngIf="settings?.facebookUrl">
                        <a [href]="settings?.facebookUrl" target="_blank" class="social__footer">
                           Facebook <i class="bi bi-arrow-right"></i>
                        </a>
                     </div>
                     <div class="col-lg-6 col-md-6 col-sm-6" *ngIf="settings?.instagramUrl">
                        <a [href]="settings?.instagramUrl" target="_blank" class="social__footer">
                           Instagram <i class="bi bi-arrow-right"></i>
                        </a>
                     </div>
                     <div class="col-lg-6 col-md-6 col-sm-6" *ngIf="settings?.linkedinUrl">
                        <a [href]="settings?.linkedinUrl" target="_blank" class="social__footer">
                           LinkedIn <i class="bi bi-arrow-right"></i>
                        </a>
                     </div>
                     <div class="col-lg-6 col-md-6 col-sm-6" *ngIf="settings?.youtubeUrl">
                        <a [href]="settings?.youtubeUrl" target="_blank" class="social__footer">
                           YouTube <i class="bi bi-arrow-right"></i>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="footer__bottom cmn__bg">
      <div class="container">
         <div class="copyright">
            <p class="white">{{ settings?.footerCopyright || 'Copyright © 2026 WebTech Creators. All rights reserved.' }}</p>
            <ul class="terms">
               <li><a href="#0">Terms & Condition</a></li>
               <li><a href="#0">Privacy Policy</a></li>
            </ul>
            <a href="#about" class="toparrow">
               <i class="bi bi-arrow-up-short"></i>
            </a>
         </div>
      </div>
   </div>
</footer>
  `
})
export class FooterComponent implements OnInit {
  settings?: SiteSettings;

  constructor(
    private siteSettingsService: SiteSettingsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.siteSettingsService.getSettings().subscribe({
      next: (settings) => {
        this.settings = settings;
        this.cdr.detectChanges(); // Force update
      },
      error: (error) => {
        console.error('GraphQL Error:', error);
      }
    });
  }
}

