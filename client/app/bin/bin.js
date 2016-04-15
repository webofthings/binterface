'use strict';

angular.module('binterfaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bin', {
        url: '/bin',
        template: '<bin></bin>'
      });
  });
