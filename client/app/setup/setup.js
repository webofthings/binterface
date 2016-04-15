'use strict';

angular.module('binterfaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('setup', {
        url: '/setup',
        template: '<setup></setup>'
      });
  });
