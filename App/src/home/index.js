// Create the module where our functionality can attach to
let homeModule = angular.module('home', []);

// Include our UI-Router config settings
import HomeConfig from '/src/home/home.config.js';
homeModule.config(HomeConfig);

// Controllers
import HomeCtrl from '/src/home/home.controller.js';
homeModule.controller('HomeCtrl', HomeCtrl);

export default homeModule;