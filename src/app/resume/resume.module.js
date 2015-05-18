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
        templateUrl: 'app/resume/pages/about.html'
      })
      .state('resume.skills', {
        url: '/skills',
        title: 'Skills: Joshua Johnson',
        templateUrl: 'app/resume/pages/skills.html'
      })
      .state('resume.experience', {
        url: '/experience',
        title: 'Experience: Joshua Johnson',
        templateUrl: 'app/resume/pages/experience.html'
      })
      .state('resume.education', {
        url: '/education',
        title: 'Education: Joshua Johnson',
        templateUrl: 'app/resume/pages/education.html'
      })
      .state('resume.contact', {
        url: '/contact',
        title: 'Contact: Joshua Johnson',
        templateUrl: 'app/resume/pages/contact.html'
      });
  }

})();
