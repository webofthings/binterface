'use strict';
(function(){

class MaintenanceComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('binterfaceApp')
  .component('maintenance', {
    templateUrl: 'app/maintenance/maintenance.html',
    controller: MaintenanceComponent
  });

})();
