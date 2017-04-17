import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {HomeTopTab} from "../pages/tabs/home-top-tabs";

// Add the RxJS Observable operators.
import './rxjs-operator';
import {RootTab} from "../pages/tabs/root-tabs";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage : any;

  constructor(platform: Platform) {
    this.rootPage=RootTab;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
