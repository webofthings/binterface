'use strict';
(function(){

class MapComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('binterfaceApp')
  .component('map', {
    templateUrl: 'app/map/map.html',
    controller: MapComponent
  });

})();
