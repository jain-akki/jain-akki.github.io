(function () {

  'use strict';

  angular.module('githubPortfolio.factories')

    .constant("FBURL", "https://personal-profile-b6b14.firebaseio.com/")

    .factory('aboutMeDataService', function ($http, $q, FBURL) {

      var aboutMeInfo = function () {

        var deferred = $q.defer();

        $http({
          method: 'GET',
          contentType: 'application/json',
          url: FBURL + 'about_me.json'
        })
        .success(function (response) {
          deferred.resolve(response);
        }).error(function (response) {
          deferred.reject(response);
        });

        return deferred.promise;
      }

      return {
        aboutMeInfo: aboutMeInfo
      }

    })
})();