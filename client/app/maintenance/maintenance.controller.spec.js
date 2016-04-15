'use strict';

describe('Component: MaintenanceComponent', function () {

  // load the controller's module
  beforeEach(module('binterfaceApp'));

  var MaintenanceComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MaintenanceComponent = $componentController('MaintenanceComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
