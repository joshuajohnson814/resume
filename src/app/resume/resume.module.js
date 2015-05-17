(function() {
  'use strict';

  angular.module('app.resume', []).config(routes);

  function routes($stateProvider) {
    $stateProvider
      .state('resume', {
        url: '/resume',
        title: 'Resume: Joshua Johnson',
        templateUrl: 'app/resume/resume.html',
        controller: 'Resume',
        controllerAs: 'vm'
      })
      .state('resume.about', {
        url: '/about',
        title: 'About Me: Joshua Johnson',
        templateUrl: 'app/resume/about/about.html'
      });
  }

})();
