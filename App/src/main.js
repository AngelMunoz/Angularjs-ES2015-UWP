// Import your app functionality
import '/src/home/index.js'
//import './about'
//import './tickets'
//import './users'

import AppController from '/src/app.controller.js';

// Create and bootstrap application
const requires = [
  'ui.router',
  'home',
  //'about',
  //'tickets',
  //'users',
];

window.app = angular.module('app', requires);


app.controller('AppController', AppController);

console.log('por aqui')
angular.bootstrap(document.getElementById('app'), ['app']);