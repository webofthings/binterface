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
      console.log(1, this.results, this.user)
      return this.user.thng(this.results[0].id).update({
        collections : [collection.id]
      }).then((thng) => {
        console.log(2, thng)
        return this.user.thng(this.results[1].id).update({
          collections : [collection.id]
        }).then(thng => {
          console.log(3, thng)
        })
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
