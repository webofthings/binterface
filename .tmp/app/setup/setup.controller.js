'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var SetupComponent = function () {
    function SetupComponent(Evrythng) {
      _classCallCheck(this, SetupComponent);

      this.message = 'Hello';
      this.Evrythng = Evrythng;
      this.app = Evrythng.getApp();
      this.user = Evrythng.getUser();
    }

    _createClass(SetupComponent, [{
      key: 'pairUp',
      value: function pairUp() {
        var _this = this;

        this.user.collection().create({
          name: 'Bin to Binometer Pair'
        }).then(function (collection) {

          return EVT.api({
            url: '/collections/' + collection.id + '/thngs',
            data: [_this.results[0].thng.id],
            method: 'put',
            authorization: _this.Evrythng.getOptions().op
          }).then(function (val) {
            return EVT.api({
              url: '/collections/' + collection.id + '/thngs',
              data: [_this.results[1].thng.id],
              method: 'put',
              authorization: _this.Evrythng.getOptions().op
            });
          });
        });
      }
    }, {
      key: 'scanBin',
      value: function scanBin(results) {
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
          console.log('> REE', result);
          _this2.results.push(result);
          _this2.pairUp();
        }, function (err) {
          console.log('err', err);
        });
      }
    }, {
      key: 'scanBinometer',
      value: function scanBinometer() {
        var _this3 = this;

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
          _this3.results = [result];
        }, function (err) {
          console.log('err', err);
        });
      }
    }]);

    return SetupComponent;
  }();

  angular.module('binterfaceApp').component('setup', {
    templateUrl: 'app/setup/setup.html',
    controller: SetupComponent
  });
})();
//# sourceMappingURL=setup.controller.js.map
