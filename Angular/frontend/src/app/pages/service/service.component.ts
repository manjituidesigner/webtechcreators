import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var AOS: any;
declare var $: any;

@Component({
  selector: 'app-service',
  standalone: true,
  template: `<section class="breadcrumnd__section">
<!--<< Header v-1 >>-->
   <div class="container pt-120 pb-120">
      <div class="row g-4 justify-content-center">
         <div class="col-lg-8">
            <div class="breadcrumnd__wrap text-center">
               <h1>
                 Services All
               </h1>
               <ul class="breakcrumnd__cont justify-content-center">
                  <li>
                     <a href="index-2.html">
                        Home 
                     </a>
                  </li>
                  <li class="white">
                     /  
                  </li>
                  <li class="base">
                     Services All
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>
<!--<< banner >>-->

<!--<< service >>-->
<section id="services" class="service__section overhid pt-120 pb-120">
   <div class="container">
      <div class="project__head text-center">
         <span class="common__sub" data-aos="fade-down" data-aos-duration="1000">
           Services That i Provide
         </span>
         <h2 class="fw-500" data-aos="fade-up" data-aos-duration="1200">
            Our special service for your business 
            development
         </h2>
      </div>
      <div class="service__uniquewrap">
         <div class="service__unique__item pb-40 pt-40" data-aos="fade-up" data-aos-duration="1000">
            <div class="left__service">
               <div class="serial__adjust">
                  <span>
                     01
                  </span>
                  <div class="cont">
                     <h5>
                        Website Design
                     </h5>
                     <h2>
                        <a href="service.html">
                           Static | Wordpress | Ecommerce 
                        </a>
                     </h2>
                  </div>
               </div>
               <p class="pra">
                  We specialize in creating stunning Static Websites, dynamic WordPress sites, 
                  and powerful E-commerce platforms. Whether you need a simple online presence or a full-fledged online store, 
                  we deliver customized solutions to grow your business.
               </p>
            </div>
            <a href="service.html" class="common__icon">
               <i class="bi bi-arrow-up-right"></i>
            </a>
         </div>
         <div class="service__unique__item pb-40 pt-40" data-aos="fade-up" data-aos-duration="1200">
            <div class="left__service">
               <div class="serial__adjust">
                  <span>
                     02
                  </span>
                  <div class="cont">
                     <h5>
                        Branding
                     </h5>
                     <h2>
                        <a href="service.html">
                           Logo Design | Social Media
                        </a>
                     </h2>
                  </div>
               </div>
               <p class="pra">
                  We offer complete Branding solutions, including Logo Design and Social Media Branding. Our creative designs ensure 
                  syour brand stands out and leaves a lasting impression        </div>
            <a href="service.html" class="common__icon">
               <i class="bi bi-arrow-up-right"></i>
            </a>
         </div>
         <div class="service__unique__item pb-40 pt-40" data-aos="fade-up" data-aos-duration="1400">
            <div class="left__service">
               <div class="serial__adjust">
                  <span>
                     03
                  </span>
                  <div class="cont">
                     <h5>
                        UI/UX Design
                     </h5>
                     <h2>
                        <a href="service.html">
                           Web UI/UX Design
                        </a>
                     </h2>
                  </div>
               </div>
               <p class="pra">
                  We craft modern and user-friendly Web UI/UX Designs that enhance user experience and boost engagement. 
                  Our designs are visually appealing, intuitive, and built to perform.
               </p>
           </div>
            <a href="service.html" class="common__icon">
               <i class="bi bi-arrow-up-right"></i>
            </a>
         </div>
         <div class="service__unique__item pb-40 pt-40" data-aos="fade-up" data-aos-duration="1600">
            <div class="left__service">
               <div class="serial__adjust">
                  <span>
                     04
                  </span>
                  <div class="cont">
                     <h5>
                       Web Apps
                     </h5>
                     <h2>
                        <a href="service.html">
                           Application Design
                        </a>
                     </h2>
                  </div>
               </div>
               <p class="pra">
                  We design powerful and intuitive Web Applications that offer seamless user experiences. Our focus is on creating functional, 
                  scalable, and visually impressive app designs.
               </p>
           </div>
            <a href="service.html" class="common__icon">
               <i class="bi bi-arrow-up-right"></i>
            </a>
         </div>

         <div class="service__unique__item pb-40 pt-40" data-aos="fade-up" data-aos-duration="1600">
            <div class="left__service">
               <div class="serial__adjust">
                  <span>
                     05
                  </span>
                  <div class="cont">
                     <h5>
                       Mobile Apps
                     </h5>
                     <h2>
                        <a href="service.html">
                           Android | iOS 
                        </a>
                     </h2>
                  </div>
               </div>
               <p class="pra">
                  From concept to launch, we create powerful Mobile Applications for Android and iOS platforms. We focus on 
                  smooth performance, intuitive design, and user satisfaction.
               </p>
           </div>
            <a href="service.html" class="common__icon">
               <i class="bi bi-arrow-up-right"></i>
            </a>
         </div>

         <div class="service__unique__item pb-40 pt-40" data-aos="fade-up" data-aos-duration="1800">
            <div class="left__service">
               <div class="serial__adjust">
                  <span>
                     06
                  </span>
                  <div class="cont">
                     <h5>
                        SEO Analytics
                     </h5>
                     <h2>
                        <a href="service.html">
                           Digital Marketing
                        </a>
                     </h2>
                  </div>
               </div>
               <p class="pra">
                  Boost your online visibility with our SEO and Digital Marketing services. We help you rank higher, attract more customers, 
                  and grow your brand across all digital platforms.
               </p>
           </div>
            <a href="service.html" class="common__icon">
               <i class="bi bi-arrow-up-right"></i>
            </a>
         </div>
         <div class="service__unique__item pb-40 pt-40" data-aos="fade-up" data-aos-duration="1800">
            <div class="left__service">
               <div class="serial__adjust">
                  <span>
                     07
                  </span>
                  <div class="cont">
                     <h5>
                        Video Editing
                     </h5>
                     <h2>
                        <a href="service.html">
                           Ads | Reels | Youtube
                        </a>
                     </h2>
                  </div>
               </div>
               <p class="pra">
                  Boost your online visibility with our SEO and Digital Marketing services. We help you rank higher, attract more customers, 
                  and grow your brand across all digital platforms.
               </p>
           </div>
            <a href="service.html" class="common__icon">
               <i class="bi bi-arrow-up-right"></i>
            </a>
         </div>
      </div>
   </div>
</section>
<!--<< service >>-->

<!--<< project metting one >>-->
<section class="project__metting overhid pt-120 pb-120">
   <div class="container">
      <div class="row g-4 align-items-center">
        <div class="col-lg-7">
         <div class="pro__metting__content">
            <div class="project__head">
               <span class="common__sub" data-aos="fade-down" data-aos-duration="1000">
                 Need a Project? 
               </span>
               <h2 class="fw-500" data-aos="fade-down" data-aos-duration="1600">
                  Let's work together. fixed 
                  a meeting
               </h2>
            </div>
            <div class="about__contbox__item pb-30" data-aos="fade-up" data-aos-duration="1000">
               <span class="icon">
                  <i class="bi bi-envelope"></i>
               </span>
               <span class="box">
                  <span class="ptext fz-18 mb-1 d-block">
                     Email
                  </span>
                  <a href="#0">
                     info@webtechcreators.com
                  </a>
               </span>
            </div>
            <div class="about__contbox__item pb-30 pt-30" data-aos="fade-up" data-aos-duration="1500">
               <span class="icon">
                  <i class="bi bi-geo-alt"></i>
               </span>
               <span class="box">
                  <span class="ptext fz-18 mb-1 d-block">
                     Location
                  </span>
                  <a href="#0">
                     Victoria Street London, England
                  </a>
               </span>
            </div>
         </div>
        </div>
        <div class="col-lg-5">
            <div class="pro__mettingthumb" data-aos="zoom-in" data-aos-duration="2000">
               <img src="assets/img/project/project-need.png" alt="img">
            </div>
        </div>
      </div>
   </div>
</section>
<!--<< project metting one >>-->

<!--<< pricing >>-->
<section class="pricing__section pt-120 pb-120">
   <div class="container">
      <div class="project__head text-center">
         <span class="common__sub" data-aos="fade-down" data-aos-duration="1000">
            Choose Your Plan 
         </span>
         <h2 class="fw-500" data-aos="fade-up" data-aos-duration="1000">
            The best pricing plans to get 
           <span class="d-block">
            your best
           </span>
         </h2>
      </div>
      <div class="row g-4 justify-content-center">
        <div class="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1000">
            <div class="process__item price__item price_li">
               <div class="pri__iconbox">
                  <img src="assets/img/project/basic.png" alt="img">
               </div>
               <h4 class="white mb-24">
                  Basic Plan
               </h4>
               <h2 class="big__title mb-24">
                  ₹25000
                  <!-- <span>
                     /Per Month
                  </span> -->
               </h2>
               <ul class="pri__list">
                  <li>
                     Static Webiste with 5 Pages
                  </li>
                  <li>
                     One Logo Design
                  </li>
                  <li>
                     15 Blog Posts
                  </li>
                  <li>
                     15 Social Media Posts
                  </li>
                  <li>
                     Free Hosting & Domain 1st Year
                  </li>
                  <li>
                     Free Site Maintaince 1st Year
                  </li>
               </ul>
               <a href="#0" class="cmn--btn d-flex align-items-center justify-content-center gap-2 w-100">
                  <span>
                     Start My Project Now
                  </span>
                  <span>
                     <i class="bi bi-arrow-right fz-20"></i>
                  </span>
               </a>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
            <div class="process__item price__item pri__active">
               <div class="pri__iconbox">
                  <img src="assets/img/project/warranty.png" alt="img">
               </div>
               <h4 class="mtitle mb-24">
                  Ultra Plan
               </h4>
               <h2 class="big__title mtitle mb-24">
                  ₹65000
                  <!-- <span>
                     /Per Month
                  </span> -->
               </h2>
               <ul class="pri__list">
                  <li>
                     Dyanamic Webstie (Ecommerce)
                  </li>
                  <li>
                     15 Blog Posts
                  </li>
                  <li>
                     15 Social Media Posts
                  </li>
                  <li>
                     3 Variations Logo Design
                  </li>
                  <li>
                     Free Training to Manage Products (One year)
                  </li>
                  <li>
                     Free Hosting & Domain
                  </li>
               </ul>
               <a href="#0" class="cmn--btn cmn--btn-ctm d-flex align-items-center justify-content-center gap-2 w-100">
                  <span class="startPro">
                     Start My Project Now
                  </span>
                  <span>
                     <i class="bi bi-arrow-right fz-20"></i>
                  </span>
               </a>
            </div>
        </div>
         <div class="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1400">
            <div class="process__item price__item price_li">
               <div class="pri__iconbox">
                  <img src="assets/img/project/premium-quality.png" alt="img">
               </div>
               <h4 class="white mb-24">
                  Gold Plan
               </h4>
               <h2 class="big__title mb-24">
                  ₹399
                  <span>
                     /hourly
                  </span>
               </h2>
               <ul class="pri__list">
                  <li>
                     Web Development
                  </li>
                  <li>
                     Mobile Development
                  </li>
                  <li>
                     Advetising/Social Media
                  </li>
                  <li>
                     Graphic Design
                  </li>
                  <li>
                     SEO - Digital Marketing
                  </li>
                  <li>
                     Video Editing
                  </li>
               </ul>
               <a href="#0" class="cmn--btn d-flex align-items-center justify-content-center gap-2 w-100">
                  <span>
                     Start My Project Now
                  </span>
                  <span>
                     <i class="bi bi-arrow-right fz-20"></i>
                  </span>
               </a>
            </div>
         </div>
      </div>
   </div>
</section>
<!--<< pricing >>-->



<!--<< Footer >>-->`
})
export class ServiceComponent implements AfterViewInit {
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
