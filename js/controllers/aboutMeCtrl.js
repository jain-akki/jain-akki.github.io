(function () {

  'use strict';

  angular.module('githubPortfolio')
    .controller('aboutMeCtrl', function (aboutMeDataService) {

      var vm = this;

      aboutMeDataService.aboutMeInfo().then(function (response) {
        vm.fbData = response;
      })

    });

})();