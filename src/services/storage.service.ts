/**
 * Created by adks001 on 2017/4/17.
 */

import {Injectable} from "@angular/core";
@Injectable()
export class StorageService{
  constructor(){}
  //写入
  write(key:string,value:any){
    if(value){
      value=JSON.stringify(value);
    }
    localStorage.setItem(key,value);
  }

  //读取
  read<T>(key:string):T{
    let value:string=localStorage.getItem(key);
    if(value && value!="undefined" && value != "null"){
      return <T>JSON.parse(value);
    }
    return null;
  }
  //移除
  remove(key:string){
    localStorage.removeItem(key);
  }
  //清除所有本地缓存
  clear(){
    sessionStorage.clear();
  }




}
