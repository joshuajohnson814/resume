(function() {
  'use strict';

  angular.module('app.resume').controller('Resume', Resume);

  function Resume($mdSidenav, $state) {
    var vm = this;

    vm.contact = {};

    vm.toggleNav = toggleNav;
    vm.goToNav = goToNav;
    vm.sendMessage = sendMessage;

    function toggleNav() {
      $mdSidenav('left').toggle();
    }

    function goToNav(state) {
      $state.go(state);
      vm.toggleNav();
    }

    function sendMessage(isValid) {
      if (isValid) {
      }
    }
  }
})();
