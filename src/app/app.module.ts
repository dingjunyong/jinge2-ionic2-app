


import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/common-page/about/page';
import { ContactPage } from '../pages/common-page/contact/page';
import { HomePage } from '../pages/common-page/home/page';
import { RootTab } from '../pages/tabs/root-tabs';
import {HttpService} from "../services/http.service";
import {StorageService} from "../services/storage.service";
import {CatalogListPage} from "../pages/catalog-page/list/page";
import {CustomerAddressList} from "../pages/customer-page/address-list/page";
import {CustomerCenter} from "../pages/customer-page/center/page";
import {CustomerLogin} from "../pages/customer-page/login/page";
import {CustomerRegister} from "../pages/customer-page/register/page";
import {CustomerShoppingCart} from "../pages/customer-page/shoppingcart/page";
import {OrderListPage} from "../pages/order-page/list/page";
import {ProductSearchPage} from "../pages/product-page/search/page";
import {ProductSearchResultPage} from "../pages/product-page/search-result/page";
import {SettingListPage} from "../pages/setting-page/list/page";
import {TopicListPage} from "../pages/topic-page/list/page";
import {TopicDetailPage} from "../pages/topic-page/detail/page";
import {ProductDetailDescriptionPage} from "../pages/product-page/detail-description/page";
import {ProductDetailReviewPage} from "../pages/product-page/detail-review/page";
import {HomeTopTab} from "../pages/tabs/home-top-tabs";




@NgModule({
  declarations: [
    MyApp,
    /*tabs*/
    RootTab,
    HomeTopTab,
    /*common page*/
    AboutPage,
    AboutPage,
    ContactPage,
    HomePage,
    /*catelog page*/
    CatalogListPage,
    /*customer page*/
    CustomerAddressList,
    CustomerCenter,
    CustomerLogin,
    CustomerRegister,
    CustomerShoppingCart,
    /*order page*/
    OrderListPage,
    /*product page*/
    ProductSearchPage,
    ProductSearchResultPage,
    ProductSearchPage,
    ProductDetailDescriptionPage,
    ProductDetailReviewPage,
    /*setting page*/
    SettingListPage,
    /*topic page*/
    TopicListPage,
    TopicDetailPage

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
    /*tabs*/
    RootTab,
    /*common page*/
    AboutPage,
    ContactPage,
    HomePage,
    /*catelog page*/
    CatalogListPage,
    /*customer page*/
    CustomerAddressList,
    CustomerCenter,
    CustomerLogin,
    CustomerRegister,
    CustomerShoppingCart,
    /*order page*/
    OrderListPage,
    /*product page*/
    ProductSearchPage,
    ProductSearchResultPage,
    ProductSearchPage,
    ProductDetailDescriptionPage,
    ProductDetailReviewPage,
    /*setting page*/
    SettingListPage,
    /*topic page*/
    TopicListPage,
    TopicDetailPage
  ],
  providers: [HttpService,StorageService,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
