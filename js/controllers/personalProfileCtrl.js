(function () {

  'use strict';

  angular.module('githubPortfolio')
    .controller('personalProfileCtrl', function (personalDataService) {

      var vm = this;
      vm.labels = [];
      vm.data = [];

      personalDataService.getUserInfo().then(function (response) {
        vm.fbData = response;
        angular.forEach(vm.fbData.content.language_rating, function (val, index) {
          vm.labels.push(val.name);
          vm.data.push(val.rating);
        });
        vm.data.push(0);
      })

    });

})();