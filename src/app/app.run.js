/*global FastClick */

(function() {
  'use strict';

  angular.module('app').run(run);

  function run($rootScope, $state, $stateParams) {
    FastClick.attach(document.body);

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.$on('$stateChangeSuccess', function(event, toState) {
      $rootScope.title = toState.title || 'Joshua Johnson';
      $rootScope.header = toState.header || 'Resume';
    });
  }
})();
