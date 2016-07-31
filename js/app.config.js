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
      templateUrl: 'templates/gitProfile.html',
      controller: 'githubDetailsCtrl as vm'
    })
    .state('aboutMe', {
      url: '/aboutMe',
      templateUrl: 'templates/aboutMe.html',
      controller: 'aboutCtrl as vm'
    });

    $urlRouterProvider.otherwise('/gitProfile');

  })
  .config(function ($mdThemingProvider, $mdIconProvider) {

    $mdIconProvider
      .icon("menu", "./img/svg/menu.svg", 24);

    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('deep-purple');

  });
})();