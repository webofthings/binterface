'use strict';

angular.module('binterfaceApp', [
  'binterfaceApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })

.provider('Evrythng', function(){
      var options;

      // Public interface to this service
      return {
        // Enable to configure EVT in app configuration
        init: function(opt){
          EVT.use(EVT.Scan);
          options = opt;
        },

        // Provider - return EVT App
        $get: function(){
          var user = new EVT.User(options.userApiKey),
            app = new EVT.App(options.appApiKey);

          return {
            getApp: function() {
              return app;
            },
            getUser: function() {
              return user;
            },
            resetUser: function(apiKey) {
              user = new EVT.User(apiKey);
            }
          }
        }
      };
    })

    //AUTHENTICATE A USER FOR THE APPLICATION AND PLACE THE ID HERE
    //Scope ApiKey for swap from Log in page.
    .config(function(EvrythngProvider){
        var evrythngOptions = {
            appApiKey: 'lMMP6cYAfn9ndJI4HVyVh9dtIbJ7syUPwxFnEfGai3LtLDVm4wgcgWkH9Ow1DSGSJ9xL9BCSZfMGi9Fl',
            userApiKey: 'khQX3CiasowqaNLG4flQkfipq8CfQUt8OqOh57RbmdXBPArI5CXE5Nr85sGamRgWrhtx28LJRS3VQ53Q'
        };

        EvrythngProvider.init(evrythngOptions);
    })
