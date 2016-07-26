(function () {

  'use strict';

  angular.module('githubPortfolio.factories', [])

    .value("baseUrl", "https://api.github.com/users/")

    .factory('userData', function (baseUrl, $http, $q) {

      var getUserInfo = function (username) {

        var deferred = $q.defer();

        $http({
          method: 'GET',
          contentType: 'application/json',
          url: baseUrl + username
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