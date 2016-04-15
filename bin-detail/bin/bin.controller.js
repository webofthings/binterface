'use strict';
(function(){

class BinComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('binterfaceApp')
  .component('bin', {
    templateUrl: '../bin-detail/bin/bin.html',
    controller: BinComponent
  });

})();
