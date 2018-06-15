// Create the module where our functionality can attach to
let aboutModule = angular.module('about', []);

// Include our UI-Router config settings
import AboutConfig from '/src/about/about.config.js';
aboutModule.config(AboutConfig);

// Controllers
import AboutCtrl from '/src/about/about.controller.js';
aboutModule.controller('AboutCtrl', AboutCtrl);

export default aboutModule;