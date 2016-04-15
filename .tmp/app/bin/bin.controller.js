'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var BinComponent = function () {
    function BinComponent(Evrythng) {
      _classCallCheck(this, BinComponent);

      this.message = 'Hello';
      this.bin = {
        name: 'Container name'

      };
    }

    _createClass(BinComponent, [{
      key: 'getColor',
      value: function getColor(val) {
        return val < 5 ? 'bad' : 'green';
      }
    }]);

    return BinComponent;
  }();

  angular.module('binterfaceApp').component('bin', {
    templateUrl: 'app/bin/bin.html',
    controller: BinComponent
  });
})();
//# sourceMappingURL=bin.controller.js.map
