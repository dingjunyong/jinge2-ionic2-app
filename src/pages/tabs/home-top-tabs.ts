/**
 * Created by Administrator on 2017/4/17.
 */


import { HomePage } from '../common-page/home/page';
import { Component } from '@angular/core';


@Component({
  template: `
    <ion-tabs class="tabs-basic" tabsPlacement="top">
      <ion-tab [root]="tabRoot" tabTitle="首页"></ion-tab>
      <ion-tab [root]="tabRoot" tabTitle="分类" ></ion-tab>
      <ion-tab [root]="tabRoot" tabTitle="买家秀"></ion-tab>
      <ion-tab [root]="tabRoot" tabTitle="购物车"></ion-tab>
      <ion-tab [root]="tabRoot" tabTitle="我的"></ion-tab>
    </ion-tabs>
  `})
export class HomeTopTab {
  tabRoot: any = HomePage;


  constructor() {

  }
}
