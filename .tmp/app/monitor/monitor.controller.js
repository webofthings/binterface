'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var MonitorComponent = function () {
    function MonitorComponent(Evrythng, $state, bins, $scope) {
      var _this = this;

      _classCallCheck(this, MonitorComponent);

      $scope.message = 'Hello';
      this.Evrythng = Evrythng;
      this.app = Evrythng.getApp();
      this.user = Evrythng.getUser();
      this.$state = $state;
      this.bins = bins;
      return EVT.api({
        url: '/thngs',
        authorization: Evrythng.getOptions().op
      }).then(function (thngs) {
        _this.bins = thngs.filter(function (thng) {
          return thng.name.indexOf('Waste_container_') !== -1;
        });

        console.log(_this.bins);

        _this.status = _this.bins.map(function (item) {
          return item;
        }).filter(function (item) {
          return item.properties.usv < 20;
        }).length;

        console.log('', _this.status);

        var that = _this;
        $scope.$apply(function () {
          $scope.status = that.status === 0 ? 'good' : 'bad';
        });
      });
    }

    _createClass(MonitorComponent, [{
      key: 'getmessage',
      value: function getmessage() {
        return 'HEllo';
      }
    }, {
      key: 'byScan',
      value: function byScan() {
        var _this2 = this;

        this.app.scan({
          type: 'qrcode',
          redirect: false,
          createScanAction: true,
          createAnonymousUser: true,
          spinner: {
            enabled: true,
            options: {
              color: 'black'
            }
          },
          invisible: true
        }).then(function (result) {
          _this2.$state.go('bin');
        }, function (err) {
          console.log('err', err);
        });
      }
    }]);

    return MonitorComponent;
  }();

  angular.module('binterfaceApp').component('monitor', {
    templateUrl: 'app/monitor/monitor.html',
    controller: MonitorComponent
  });
})();
//# sourceMappingURL=monitor.controller.js.map
