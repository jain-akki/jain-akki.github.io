(function () {

  'use strict';

  angular.module('githubPortfolio')
    .controller('personalProfileCtrl', function (personalDataService, fbData) {

      var vm = this;
      vm.fbData = fbData;
      vm.labels = [];
      vm.data = [];

      angular.forEach(vm.fbData.content.language_rating, function (val, index) {
        vm.labels.push(val.name);
        vm.data.push(val.rating);
      });
      vm.labels.push(0);
      vm.data.push(0);

    });

})();