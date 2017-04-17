


import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/common-page/about/page';
import { ContactPage } from '../pages/common-page/contact/page';
import { HomePage } from '../pages/common-page/home/page';
import { RootTabsPage } from '../pages/tabs/root-tabs';
import {HttpService} from "../services/http.service";
import {StorageService} from "../services/storage.service";




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    RootTabsPage,


  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      backButtonText:"",
      mode:"ios",
      tabsHideOnSubPages: 'true'         //隐藏全部子页面tabs
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    RootTabsPage,
  ],
  providers: [HttpService,StorageService,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
