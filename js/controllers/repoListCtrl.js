(function () {

  'use strict';

  angular.module('githubPortfolio')
    .controller('repoListCtrl', function ($scope, githubDataService, $mdDialog) {

      var vm = this;

      githubDataService.getRepos('jain-akki').then(function (response) {
        $scope.repos = response;
        console.log('$scope.repos: ', $scope.repos);
      });

      $scope.closeRepoDialog = function ($event) {
        $mdDialog.cancel();
      }

    });

})();