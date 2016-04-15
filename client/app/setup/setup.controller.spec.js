'use strict';

describe('Component: SetupComponent', function () {

  // load the controller's module
  beforeEach(module('binterfaceApp'));

  var SetupComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    SetupComponent = $componentController('SetupComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
