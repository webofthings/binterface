'use strict';
(function(){

class MonitorComponent {
 constructor(Evrythng, $state, bins, $scope) {
    $scope.message = 'Hello';
    this.Evrythng = Evrythng;
    this.app = Evrythng.getApp();
    this.user = Evrythng.getUser();
    this.$state = $state;
    this.bins = bins;
    return EVT.api({
      url :'/thngs',
      authorization : Evrythng.getOptions().op
    }).then((thngs) => {
      this.bins = thngs.filter(function(thng) {
          return thng.name.indexOf('Waste_container_') !== -1
      });

      console.log(this.bins)

      this.status = this.bins.map(function(item){
        return item;
      }).filter(function(item) {
        return item.properties.usv < 20;
      }).length;

      console.log('', this.status)

      var that = this;
      $scope.$apply(function() {
        $scope.status = that.status === 0 ? 'good' : 'bad';
      });

    });

  }

  getmessage() {
    return 'HEllo'
  }

  byScan() {

    this.app.scan({
      type: 'qrcode',
      redirect : false,
      createScanAction : true,
      createAnonymousUser : true,
      spinner: {
          enabled: true,
          options: {
              color: 'black'
          }
      },
      invisible: true
    })
    .then((result) =>{
        this.$state.go('bin');
      }, (err) => {
        console.log('err', err)
      });
  }
}

angular.module('binterfaceApp')
  .component('monitor', {
    templateUrl: 'app/monitor/monitor.html',
    controller: MonitorComponent
  });

})();
