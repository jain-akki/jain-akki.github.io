(function () {

  'use strict';

  angular.module('githubPortfolio')
    .controller('githubProfileCtrl', function ($mdDialog) {

      var vm = this;

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

    });

})();