'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var MaintenanceComponent = function MaintenanceComponent() {
    _classCallCheck(this, MaintenanceComponent);

    this.message = 'Hello';
  };

  angular.module('binterfaceApp').component('maintenance', {
    templateUrl: 'app/maintenance/maintenance.html',
    controller: MaintenanceComponent
  });
})();
//# sourceMappingURL=maintenance.controller.js.map
