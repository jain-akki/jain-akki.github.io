(function () {

  'use strict';

  angular.module('githubPortfolio')

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
     .state('main', {
       url: '/',
       abstract: true, 
       templateUrl: 'index.html',
       controller: 'mainCtrl as vm'
     })
    .state('gitProfile', {
      url: '/gitProfile',
      templateUrl: 'templates/mainContent.html',
      controller: 'githubDetailsCtrl as vm'
    });
    $urlRouterProvider.otherwise('/gitProfile');
  });
})();