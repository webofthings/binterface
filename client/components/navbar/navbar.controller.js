'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
  //   'title': 'Dashboard',
  //   'state': 'main'
  // },{
    'title': 'Monitor',
    'state': 'monitor'
  },{
    'title': 'Setup',
    'state': 'setup'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('binterfaceApp')
  .controller('NavbarController', NavbarController);
