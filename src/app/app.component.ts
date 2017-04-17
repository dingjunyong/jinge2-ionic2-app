import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { RootTabsPage } from '../pages/tabs/root-tabs';

// Add the RxJS Observable operators.
import './rxjs-operator';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = RootTabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
