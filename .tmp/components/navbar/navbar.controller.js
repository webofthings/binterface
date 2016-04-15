'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarController =
//end-non-standard

//start-non-standard
function NavbarController() {
  _classCallCheck(this, NavbarController);

  this.menu = [{
    //   'title': 'Dashboard',
    //   'state': 'main'
    // },{
    'title': 'Monitor',
    'state': 'monitor'
  }, {
    'title': 'Maintenance',
    'state': 'maintenance'
  }, {
    'title': 'Setup',
    'state': 'setup'
  }];
  this.isCollapsed = true;
};

angular.module('binterfaceApp').controller('NavbarController', NavbarController);
//# sourceMappingURL=navbar.controller.js.map
