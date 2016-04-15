'use strict';
(function(){

class SetupComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('binterfaceApp')
  .component('setup', {
    templateUrl: 'app/setup/setup.html',
    controller: SetupComponent
  });

})();
