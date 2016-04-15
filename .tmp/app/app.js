'use strict';

window.addEventListener('unhandledrejection', function () {
  console.log(arguments);
});

angular.module('binterfaceApp', ['binterfaceApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap']).config(function ($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);
}).provider('Evrythng', function () {
  var options;

  // Public interface to this service
  return {
    // Enable to configure EVT in app configuration
    init: function init(opt) {
      EVT.use(EVT.Scan);
      options = opt;
    },

    // Provider - return EVT App
    $get: function $get() {
      var user = new EVT.User(options.userApiKey),
          app = new EVT.App(options.appApiKey);

      return {

        getOptions: function getOptions() {
          return options;
        },

        getApp: function getApp() {
          return app;
        },
        getUser: function getUser() {
          return user;
        },
        resetUser: function resetUser(apiKey) {
          user = new EVT.User(apiKey);
        }
      };
    }
  };
})

//AUTHENTICATE A USER FOR THE APPLICATION AND PLACE THE ID HERE
//Scope ApiKey for swap from Log in page.
.config(function (EvrythngProvider) {
  var evrythngOptions = {
    op: 'n7xsEdYOPNvE8lll9XXMJd3mRupLjTSx4DYn4d3kdBeuILiaTG4o3wEeY4MgwBmPkw50HiBMdV6JCtcX',
    appApiKey: 'lMMP6cYAfn9ndJI4HVyVh9dtIbJ7syUPwxFnEfGai3LtLDVm4wgcgWkH9Ow1DSGSJ9xL9BCSZfMGi9Fl',
    userApiKey: 'khQX3CiasowqaNLG4flQkfipq8CfQUt8OqOh57RbmdXBPArI5CXE5Nr85sGamRgWrhtx28LJRS3VQ53Q'
  };

  EvrythngProvider.init(evrythngOptions);
});
//# sourceMappingURL=app.js.map
