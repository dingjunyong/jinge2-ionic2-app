import { Component } from '@angular/core';

import { ModalController,NavController } from 'ionic-angular';
import {ConfigService} from "../../../services/config.service";

@Component({
  templateUrl: 'template.html',
  providers: [ConfigService]
})
export class HomePage {

  errorMessage: string;


  constructor(public navCtrl: NavController,
               public modalCtrl: ModalController,
               public configService:ConfigService) {
  }

  ngOnInit()
  {

    //获取Home信息
    this.configService.getHome().subscribe(
      data=>{
        //处理请求
      }
    );

    //获取推荐的产品
  }






}




