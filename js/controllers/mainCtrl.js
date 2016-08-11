(function () {

  'use strict';

  angular.module('githubPortfolio')
    .controller('mainCtrl', function ($mdSidenav, githubDataService, $rootScope) {
       var vm = this;

       vm.sideMenuItem = [
         { id: 1, name: 'Github Portfolio', state: 'gitProfile' },
         { id: 2, name: 'Professional Portfolio', state: 'personalProfile' },
         { id: 3, name: 'About Me', state: 'aboutMe' }
       ];

       githubDataService.getUserInfo('jain-akki').then(function (response) {
         $rootScope.allInfo = response;
       });

       vm.toggle = function () {
         $mdSidenav('left').toggle();
       }

     });
   
})();