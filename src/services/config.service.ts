import {Injectable} from '@angular/core';
import {AppGlobal} from "../app/app.global";
import {HttpService} from "./http.service";

@Injectable()
export class ConfigService {

  constructor(public httpService:HttpService){}

  //获取首页的信息
  getHome(){
    let url=AppGlobal.getInstance().apiUrl+"/mobile/home";
    return this.httpService.get(url);
  }






}
