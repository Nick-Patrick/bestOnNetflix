import {Component} from '@angular/core';
import * as firebase from 'firebase';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar, AdMob} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage:any;

  constructor(private platform:Platform) {
    this.rootPage = TabsPage;
    this.admobid = {
      banner: 'ca-app-pub-3981028455625793/9894615711'
    };

    this.initFirebase();
    this.authFirebase();

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      window.analytics.startTrackerWithId("UA-56321517-5");
      window.analytics.setUserId(window.device.uuid);
      this.initAdmob();
    });
  }

  initFirebase() {
    const fbConf = {
      apiKey: 'AIzaSyDC5a-FHZwr-RJR2Ig3w5tnLD83JYvkJoA',
      authDomain: 'bestRatedNetflix.firebaseapp.com',
      databaseURL: 'https://bestRatedNetflix.firebaseio.com',
      storageBucket: 'bestratednetflix.appspot.com'
    };

    firebase.initializeApp(fbConf);
  }

  authFirebase() {
    firebase.auth().signInAnonymously().catch(function(error) {
      console.log(error)
    });
  }

  initAdmob() {
    if (AdMob) {
      AdMob.createBanner({
        adId: this.admobid.banner,
        autoShow: true
      });
    }
  }

}

ionicBootstrap(MyApp);
