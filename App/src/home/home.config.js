function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '',
      controller: 'HomeCtrl',
      controllerAs: '$ctrl',
      templateUrl: '/src/home/home.html'
    });

};

export default HomeConfig;