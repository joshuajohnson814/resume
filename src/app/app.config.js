(function() {
  'use strict';

  angular.module('app').config(config);

  function config($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/resume/about');
    $locationProvider.html5Mode(true).hashPrefix('!');
  }
})();
