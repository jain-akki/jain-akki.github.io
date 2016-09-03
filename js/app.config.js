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
      controller: 'githubProfileCtrl as vm'
    })
    .state('personalProfile', {
      url: '/personalProfile',
      templateUrl: 'templates/personalProfile.html',
      controller: 'personalProfileCtrl as vm',
      resolve: {
        fbData: function (personalDataService) {
          return personalDataService.getUserInfo().then(function (response) {
            return response;
          })
        }
      }
    })
    .state('aboutMe', {
      url: '/aboutMe',
      templateUrl: 'templates/aboutMe.html',
      controller: 'aboutMeCtrl as vm'
    });

    $urlRouterProvider.otherwise('/gitProfile');

  })
  .config(function ($mdThemingProvider, $mdIconProvider) {

    $mdIconProvider
      .icon("menu", "./img/svg/menu.svg", 24)
      .icon("account", "./img/svg/account.svg", 12)
      .icon("clock", "./img/svg/clock.svg", 24)
      .icon("email", "./img/svg/email.svg", 24)
      .icon("home", "./img/svg/home-map-marker.svg", 24)
      .icon("github", "./img/svg/github-circle.svg", 24)
      .icon("close", "./img/svg/close.svg", 24)
      .icon("label", "./img/svg/label.svg", 24)
      .icon("account-circle", "./img/svg/account-circle.svg", 24)
      .icon("logo", "./img/svg/logo.svg", 30);

    $mdThemingProvider.theme('default')
      .primaryPalette('amber')
      .accentPalette('brown');

  });
})();