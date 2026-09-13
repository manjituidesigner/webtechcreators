import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var AOS: any;
declare var $: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `<section class="breadcrumnd__section">
<!--<< Header v-1 >>-->
   <div class="container pt-120 pb-120">
      <div class="row g-4 justify-content-center">
         <div class="col-lg-8">
            <div class="breadcrumnd__wrap text-center">
               <h1>
                  Let's Start Something
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
                     Let's Start Something
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>
<!--<< banner >>-->

<!--<< Contact >>-->
<section class="contact__section">
   <div class="container">
      <div class="row g-4">
         <div class="col-lg-8" data-aos="fade-up" data-aos-duration="1000">
            <div class="contact__box">
               <div class="replay__box cmn__bg">
                  <h3>
                     Leave a Reply
                  </h3>
                  <form name="enq" method="post" action="contact.php" class="row g-4">
                     <div class="col-lg-6">
                        <input type="text" name="name" placeholder="Name" required>
                     </div>
                     <div class="col-lg-6">
                        <input type="tel" name="mobile" placeholder="Mobile" required>
                     </div>
                     <div class="col-lg-6">
                        <input type="email" name="email" placeholder="Email" required>
                     </div>
                     <div class="col-lg-6">
                        <input type="text" name="city_country" placeholder="City, Country" required>
                     </div>
                     <div class="col-lg-12">
                        <select name="interest" class="wide" required>
                           <option value="" selected disabled>Interest In</option>
                           <option value="Website">Website</option>
                           <option value="Wordpress Webiste">Wordpress Webiste</option>
                           <option value="Ecommerce Website">Ecommerce Website</option>
                           <option value="UI Design of Applicaiton">UI Design of Applicaiton</option>
                           <option value="Mobile Application">Mobile Application</option>
                           <option value="Web Applicaiton">Web Applicaiton</option>
                           <option value="UI/UX Prototype/ Wireframes">UI/UX Prototype/ Wireframes</option>
                           <option value="Branding">Branding</option>
                           <option value="Logo Design">Logo Design</option>
                           <option value="Social Media">Social Media</option>
                           <option value="Viedo Editing">Viedo Editing</option>
                        </select>
                     </div>
                     <div class="col-lg-12">
                        <textarea name="description" rows="5" placeholder="Description" required></textarea>
                     </div>
                     <div class="col-lg-12">
                        <button type="submit" value="Send message" name="submit" class=" border-0 d-flex fw-500 cmn--btn align-items-center gap-2">
                           <span class="get__text">
                              Send Message
                           </span>
                           <span>
                              <i class="bi bi-arrow-right fz-20"></i>                       
                           </span>
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <div class="col-lg-4" data-aos="fade-up" data-aos-duration="1500">
            <div class="contact__rightside cmn__bg">
               <h4 class="mb-30">
                  Feel free to contact me anytime
               </h4>
               <div class="contact__item mb-20">
                  <span class="he1">
                     Email
                  </span>
                  <a href="#0">
                     info@webtechcreators.com
                  </a>
               </div>
               <div class="contact__item mb-20">
                  <span class="he1">
                     Phone
                  </span>
                  <a href="#0">
                     +91 - 79866 21813
                  </a>
               </div>
               <div class="contact__item">
                  <span class="he1">
                     Address
                  </span>
                  <span class="address">
                     SCO 21, Sector 34-A, Chandigarh.
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<!--<< Contact >>-->


<!--<< Footer >>-->`
})
export class ContactComponent implements AfterViewInit {
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
