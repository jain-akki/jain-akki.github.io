(function () {

  'use strict';

  angular.module('githubPortfolio', ['ngMaterial', 'ui.router'])

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
     .state('main', {
       url: '/main',
       abstract: true, 
       templateUrl: 'index.html',
       controller: 'mainCtrl as vm'
     })
    .state('main.gitProfile', {
      url: '/gitProfile',
      templateUrl: 'templates/mainContent.html',
      controller: 'githubProfileCtrl as vm'
    });
    $urlRouterProvider.otherwise('/main/gitProfile');
  });
})();