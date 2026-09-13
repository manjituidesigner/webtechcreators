import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SiteSettingsService, SiteSettings } from '../../../core/services/site-settings.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header-section">
      <div class="container">
         <div class="header-wrapper">
            <div class="main__logo">
               <a href="/" class="logo">
                  <img *ngIf="settings?.siteLogo?.node?.sourceUrl" [src]="settings?.siteLogo?.node?.sourceUrl" alt="logo">
                  <span *ngIf="!settings?.siteLogo?.node?.sourceUrl" style="font-size:24px; font-weight:bold; color:white;">
                    {{ settings?.siteTagline || 'WebTech Creators' }}
                  </span>
               </a>
            </div>
            <ul class="main-menu">
               <li><a routerLink="/" fragment="">Home</a></li>
               <li><a routerLink="/" fragment="about">About</a></li>
               <li><a routerLink="/" fragment="prot">Work</a></li>
                 <li>
                    <a routerLink="/" fragment="services" class="text-uppercase">Services</a>
                    <ul class="sub-menu">
                       <li><a routerLink="/service">All Services</a></li>
                    </ul>
                 </li>
               <li><a routerLink="/contact">Contact</a></li>
            </ul>
            <div class="menu__components d-flex align-items-center">
               <a [href]="'tel:' + (settings?.contactPhone || '')" class="d-flex fw-500 cmn--btn align-items-center gap-2">
                  <span class="get__text">Let's Talk</span>
                  <span><i class="bi bi-arrow-right fz-20"></i></span>
               </a>
               <div class="header-bar d-lg-none">
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
               <div class="remove__click">
                  <i class="bi bi-list"></i>
               </div>
            </div>
         </div>
      </div>
   </header>
  `
})
export class HeaderComponent implements OnInit {
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
      }
    });
  }
}

