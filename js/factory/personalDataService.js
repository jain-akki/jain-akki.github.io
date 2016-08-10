(function () {

  'use strict';

  angular.module('githubPortfolio.factories')

    .constant("FBURL", "https://personal-profile-b6b14.firebaseio.com/")

    .factory('personalDataService', function ($firebase, $http, $q, FBURL) {

      var getUserInfo = function () {

        var deferred = $q.defer();

        $http({
          method: 'GET',
          contentType: 'application/json',
          url: FBURL + 'professional_portfolio.json'
        })
        .success(function (response) {
          deferred.resolve(response);
        }).error(function (response) {
          deferred.reject(response);
        });

        return deferred.promise;
      }

      return {
        getUserInfo: getUserInfo
      }

    })
})();