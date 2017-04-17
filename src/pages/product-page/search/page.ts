import {Component} from "@angular/core";
import {NavController, Platform, NavParams, ViewController } from 'ionic-angular';
import {ConfigService} from "../../../services/config.service";
import {ProductSearchResultPage} from "../search-result/page";
import {SearchTerm} from "../../../domain/common";
/**
 * Created by adks001 on 2017/4/17.
 */

@Component({
  templateUrl:"template.html",
  providers:[ConfigService]
})

export class ProductSearchPage{

  hotSearchTerms:SearchTerm[];

  constructor(
    public configService:ConfigService,
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public navCtrl: NavController){

  }

  ngOnInit(){
    this.configService.getHotSearchKeyword()
      .subscribe(data=>{
        //处理数据
      });

  }

  goSearchResultPage(keyword){
    this.navCtrl.push(ProductSearchResultPage,{q:keyword});
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }


}
