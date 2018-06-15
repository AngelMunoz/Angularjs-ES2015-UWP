function AboutConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('about', {
      url: 'about',
      controller: 'AboutCtrl',
      controllerAs: '$ctrl',
      templateUrl: '/src/about/about.html'
    });

};

export default AboutConfig;