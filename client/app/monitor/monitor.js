'use strict';

angular.module('binterfaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('monitor', {
        url: '/',
        template: '<monitor></monitor>',
        resolve : {
          bins : function(Evrythng) {
            return EVT.api({
              url :'/thngs',
              authorization : Evrythng.getOptions().op
            }).then(function(thngs) {
              return thngs.filter(function(thng) {
                return thng.name.indexOf('Waste_container_') !== -1
              })
            })
          }
        }
      });
  });
