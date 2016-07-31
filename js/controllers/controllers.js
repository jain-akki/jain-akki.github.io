(function () {

  'use strict';

  angular.module('githubPortfolio')

     .controller('mainCtrl', function () {
       var vm = this;
       console.log('mainContent');
     })
    .controller('githubDetailsCtrl', function (userData, $mdSidenav) {

      var vm = this;

      console.log('githubProfileCtrl');

      userData.getUserInfo('jain-akki').then(function (response) {
        vm.allInfo = response;
        console.log('vm.allInfo', vm.allInfo);
      });

      vm.toggle = function () {
        $mdSidenav('left').toggle();
      }

    })
   
})();