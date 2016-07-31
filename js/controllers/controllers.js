(function () {

  'use strict';

  angular.module('githubPortfolio')

     .controller('mainCtrl', function ($mdSidenav, userData, $rootScope) {
       var vm = this;

       console.log('mainContent');

       vm.sideMenuItem = [
         { id: 1, name: 'Github Portfolio', state: 'gitProfile' },
         { id: 2, name: 'Professional Portfolio', state: 'professionalPortfolio' },
         { id: 3, name: 'About Me', state: 'aboutMe' }
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
    .controller('githubDetailsCtrl', function ($mdDialog) {

      var vm = this;

      console.log('githubProfileCtrl');

      vm.showRepositories = function (ev) {
        $mdDialog.show({
          templateUrl: 'templates/repoList.html',
          controller: 'repoListCtrl',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true
        }).then(function (answer) {

        }, function () {

        });
      }

    })
    .controller('repoListCtrl', function ($scope, userData, $mdDialog) {

      var vm = this;

      console.log('repoListCtrl');

      userData.getRepos('jain-akki').then(function (response) {
        $scope.repos = response;
        console.log('$scope.repos: ', $scope.repos);
      });

      $scope.closeRepoDialog = function ($event) {
        $mdDialog.cancel();
      }

    })
    .controller('professionalPortfolioCtrl', function () {

      var vm = this;

      console.log('professionalPortfolioCtrl');

    })
    .controller('aboutCtrl', function () {
      var vm = this;
      console.log('aboutCtrl');
    });
   
})();