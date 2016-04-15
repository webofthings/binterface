'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var SetupComponent = function SetupComponent() {
    _classCallCheck(this, SetupComponent);

    this.message = 'Hello';
  };

  angular.module('binterfaceApp').component('setup', {
    templateUrl: 'app/setup/setup.html',
    controller: SetupComponent
  });
})();
//# sourceMappingURL=setup.controller.js.map
