'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var MonitorComponent = function MonitorComponent() {
    _classCallCheck(this, MonitorComponent);

    this.message = 'Hello';
  };

  angular.module('binterfaceApp').component('monitor', {
    templateUrl: 'app/monitor/monitor.html',
    controller: MonitorComponent
  });
})();
//# sourceMappingURL=monitor.controller.js.map
