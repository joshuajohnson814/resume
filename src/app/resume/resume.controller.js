(function() {
  'use strict';

  angular.module('app.resume').controller('Resume', Resume);

  function Resume($mdSidenav) {
    var vm = this;

    vm.toggleNav = toggleNav;

    function toggleNav() {
      $mdSidenav('left').toggle();
    }
  }
})();
