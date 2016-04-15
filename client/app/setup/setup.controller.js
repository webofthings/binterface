'use strict';
(function(){

class SetupComponent {

  constructor(Evrythng) {
    this.message = 'Hello';
    this.Evrythng = Evrythng;
    this.app = Evrythng.getApp();
    this.user = Evrythng.getUser();
  }

  pairUp() {
    this.user.collection().create({
      name : 'Bin to Binometer Pair'
    }).then(collection => {

      return EVT.api({
        url : '/collections/' + collection.id + '/thngs',
        data : [this.results[0].thng.id],
        method : 'put',
        authorization : this.Evrythng.getOptions().op
      }).then(val => {
        return EVT.api({
          url : '/collections/' + collection.id + '/thngs',
          data : [this.results[1].thng.id],
          method : 'put',
          authorization : this.Evrythng.getOptions().op
        });
      });

    });
  }

  scanBin(results) {


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
        console.log('> REE', result)
        this.results.push(result);
        this.pairUp();
      }, (err) => {
        console.log('err', err)
      });
  }

  scanBinometer() {

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
    .then((result) => {
      this.results = [result];
      }, (err) => {
        console.log('err', err)
      });
    }
}

angular.module('binterfaceApp')
  .component('setup', {
    templateUrl: 'app/setup/setup.html',
    controller: SetupComponent
  });

})();
