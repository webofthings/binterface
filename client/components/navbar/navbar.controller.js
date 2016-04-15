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
    'title': 'Maintenance',
    'state': 'maintenance'
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
