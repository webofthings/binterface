'use strict';
(function(){

class BinComponent {
  constructor(Evrythng) {
    this.message = 'Hello';
    this.bin = {
      name : 'Container name'

    }
  }

  getColor(val) {
    return val < 5 ? 'bad' : 'green';
  }
}

angular.module('binterfaceApp')
  .component('bin', {
    templateUrl: 'app/bin/bin.html',
    controller: BinComponent
  });

})();
