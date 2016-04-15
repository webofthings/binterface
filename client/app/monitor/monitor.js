'use strict';

angular.module('binterfaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('monitor', {
        url: '/',
        template: '<monitor></monitor>'
      });
  });
