

import { HomePage } from '../common-page/home/page';
import { Component } from '@angular/core';


@Component({
  template: `
    <ion-tabs>
      <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="home"></ion-tab>
      <ion-tab [root]="tab2Root" tabTitle="分类" tabIcon="apps"></ion-tab>
      <ion-tab [root]="tab3Root" tabTitle="买家秀" tabIcon="people"></ion-tab>
      <ion-tab [root]="tab4Root" tabTitle="购物车" tabIcon="cart"></ion-tab>
      <ion-tab [root]="tab5Root" tabTitle="我的" tabIcon="person"></ion-tab>
    </ion-tabs>
`})
export class RootTab {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = HomePage;
  tab3Root: any = HomePage;
  tab4Root: any = HomePage;
  tab5Root: any = HomePage;


  constructor() {

  }
}
