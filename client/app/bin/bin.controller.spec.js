'use strict';

describe('Component: BinComponent', function () {

  // load the controller's module
  beforeEach(module('binterfaceApp'));

  var BinComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    BinComponent = $componentController('BinComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
