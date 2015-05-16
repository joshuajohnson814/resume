(function() {
  'use strict';

  angular.module('app.resume', []).config(routes);

  function routes($stateProvider) {
    $stateProvider
      .state('resume', {
        url: '/resume',
        title: 'Resume: Joshua Johnson',
        templateUrl: 'app/resume/main.html'
      });
  }

})();
