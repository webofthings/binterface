'use strict';
(function(){

class MonitorComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('binterfaceApp')
  .component('monitor', {
    templateUrl: 'app/monitor/monitor.html',
    controller: MonitorComponent
  });

})();
