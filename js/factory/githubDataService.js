(function () {

  'use strict';

  angular.module('githubPortfolio.factories', [])

    .constant("baseUrl", "https://api.github.com/users/")

    .factory('githubDataService', function (baseUrl, $http, $q) {

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

      var getRepos = function (username) {

        var deferred = $q.defer();

        $http({
          method: 'GET',
          contentType: 'application/json',
          url: baseUrl + username + '/repos'
        })
        .success(function (response) {
          deferred.resolve(response);
        }).error(function (response) {
          deferred.reject(response);
        });

        return deferred.promise;
      }

      return {
        getUserInfo: getUserInfo,
        getRepos: getRepos
      }

    })
})();