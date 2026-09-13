const fs = require('fs');
let config = JSON.parse(fs.readFileSync('angular.json', 'utf8'));

config.projects.frontend.architect.build.options.styles = [
  "public/assets/css/bootstrap.min.css",
  "public/assets/css/aos.css",
  "public/assets/css/magnific-popup.css",
  "public/assets/css/nice-select.css",
  "public/assets/css/odometer.css",
  "public/assets/css/swiper-bundle.min.css",
  "public/assets/css/main.css",
  "public/assets/css/custom.css",
  "src/styles.css"
];

// We should also add scripts here!
config.projects.frontend.architect.build.options.scripts = [
  "public/assets/js/jquery-3.7.0.min.js",
  "public/assets/js/viewport.jquery.js",
  "public/assets/js/bootstrap.min.js",
  "public/assets/js/aos.js",
  "public/assets/js/jquery.nice-select.min.js",
  "public/assets/js/swiper-bundle.min.js",
  "public/assets/js/jquery.magnific-popup.min.js",
  "public/assets/js/odometer.min.js",
  "public/assets/js/wow.min.js",
  "public/assets/js/main.js"
];

fs.writeFileSync('angular.json', JSON.stringify(config, null, 2));
