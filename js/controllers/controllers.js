(function () {

  'use strict';

  angular.module('githubPortfolio')

    .controller('mainCtrl', function ($mdSidenav, githubDataService, $rootScope) {
       var vm = this;

       console.log('mainContent');

       vm.sideMenuItem = [
         { id: 1, name: 'Github Portfolio', state: 'gitProfile' },
         { id: 2, name: 'Professional Portfolio', state: 'professionalPortfolio' },
         { id: 3, name: 'About Me', state: 'aboutMe' }
       ];

       githubDataService.getUserInfo('jain-akki').then(function (response) {
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
    .controller('repoListCtrl', function ($scope, githubDataService, $mdDialog) {

      var vm = this;

      console.log('repoListCtrl');

      githubDataService.getRepos('jain-akki').then(function (response) {
        $scope.repos = response;
        console.log('$scope.repos: ', $scope.repos);
      });

      $scope.closeRepoDialog = function ($event) {
        $mdDialog.cancel();
      }

    })
    .controller('professionalPortfolioCtrl', function (personalDataService) {

      var vm = this;

      vm.labels = [];

      vm.data = [];

      console.log('professionalPortfolioCtrl');

      personalDataService.getUserInfo().then(function (response) {
        vm.fbData = response;
        console.log('vm.fbData: ', vm.fbData.content.language_rating[0].name);
        angular.forEach(vm.fbData.content.language_rating, function (val, index) {
          vm.labels.push(val.name);
          vm.data.push(val.rating); 
        });
        vm.data.push(0);
      })

    })
    .controller('aboutCtrl', function () {
      var vm = this;
      console.log('aboutCtrl');
    });
   
})();