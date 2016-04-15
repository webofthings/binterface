'use strict';

describe('Service: bins', function () {

  // load the service's module
  beforeEach(module('binterfaceApp.bins'));

  // instantiate service
  var bins;
  beforeEach(inject(function (_bins_) {
    bins = _bins_;
  }));

  it('should do something', function () {
    expect(!!bins).to.be.true;
  });

});
