(function () {

  'use strict';

  angular.module('githubPortfolio')

     .controller('mainCtrl', function ($mdSidenav, userData, $rootScope) {
       var vm = this;

       console.log('mainContent');

       vm.sideMenuItem = [
         { id: 1, name: 'Github Portfolio', state: 'gitProfile' },
         {id: 2, name: 'About Me',  state: 'aboutMe'}
       ];

       userData.getUserInfo('jain-akki').then(function (response) {
         $rootScope.allInfo = response;
         console.log('allInfo', $rootScope.allInfo);
       });

       vm.toggle = function () {
         console.log('Btn Clicked!!');
         $mdSidenav('left').toggle();
       }

     })
    .controller('githubDetailsCtrl', function (userData) {

      var vm = this;

      console.log('githubProfileCtrl'); 

    })
    .controller('aboutCtrl', function () {
      var vm = this;
      console.log('aboutCtrl');
    });
   
})();