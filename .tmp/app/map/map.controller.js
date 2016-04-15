'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var MapComponent = function MapComponent() {
    _classCallCheck(this, MapComponent);

    this.message = 'Hello';
  };

  angular.module('binterfaceApp').component('map', {
    templateUrl: 'app/map/map.html',
    controller: MapComponent
  });
})();
//# sourceMappingURL=map.controller.js.map
