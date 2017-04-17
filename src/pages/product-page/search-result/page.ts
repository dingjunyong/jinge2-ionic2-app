/**
 * Created by Administrator on 2017/4/17.
 */

import {Component} from "@angular/core";
import {NavParams} from "ionic-angular";
@Component({
  templateUrl:"template.html",
  providers:[]
})

export class ProductSearchResultPage{

  // 评论参数
  private searchParam ={
    q:''
  };
  constructor(
    public param:NavParams
  ){
    this.searchParam.q=param.data.q;
  }

  /**
   * 初始化
   */
  ngOnInit(){
    this.goSearch();
  }

  goSearch(){

  }


}
