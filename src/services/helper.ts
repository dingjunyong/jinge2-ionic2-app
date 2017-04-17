/**
 * Created by adks001 on 2017/4/17.
 */

import {Directive, ElementRef, Renderer} from 'angular2/core';
import {Platform, Navbar} from 'ionic-angular';


export function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function toQueryPair(key, value) {
  if (typeof value == 'undefined'){
    return key;
  }
  return key + '=' + encodeURIComponent(value === null ? '' : String(value));
}

export function toQueryString(obj) {
  var ret = [];
  for(var key in obj){
    key = encodeURIComponent(key);
    var values = obj[key];
    if(values && values.constructor == Array){//数组
      var queryValues = [];
      for (var i = 0, len = values.length, value; i < len; i++) {
        value = values[i];
        queryValues.push(toQueryPair(key, value));
      }
      ret = ret.concat(queryValues);
    }else{ //字符串
      ret.push(toQueryPair(key, values));
    }
  }
  return '?'+ret.join('&');
}

export function toBodyString(obj) {
  var ret = [];
  for(var key in obj){
    key = encodeURIComponent(key);
    var values = obj[key];
    if(values && values.constructor == Array){//数组
      var queryValues = [];
      for (var i = 0, len = values.length, value; i < len; i++) {
        value = values[i];
        queryValues.push(toQueryPair(key, value));
      }
      ret = ret.concat(queryValues);
    }else{ //字符串
      ret.push(toQueryPair(key, values));
    }
  }
  return ret.join('&');
}

/**
 * 格式化日期
 * sFormat：日期格式:默认为yyyy-MM-dd     年：y，月：M，日：d，时：h，分：m，秒：s
 * @example  dateFormat(new Date(),'yyyy-MM-dd')   "2017-02-28"
 * @example  dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss')   "2017-02-28 09:24:00"
 * @example  dateFormat(new Date(),'hh:mm')   "09:24"
 * @param date 日期
 * @param sFormat 格式化后的日期字符串
 * @returns {String}
 */
export function  dateFormat(date: Date, sFormat: String = 'yyyy-MM-dd'): string {
  let time = {
    Year: 0,
    TYear: '0',
    Month: 0,
    TMonth: '0',
    Day: 0,
    TDay: '0',
    Hour: 0,
    THour: '0',
    hour: 0,
    Thour: '0',
    Minute: 0,
    TMinute: '0',
    Second: 0,
    TSecond: '0',
    Millisecond: 0
  };
  time.Year = date.getFullYear();
  time.TYear = String(time.Year).substr(2);
  time.Month = date.getMonth() + 1;
  time.TMonth = time.Month < 10 ? "0" + time.Month : String(time.Month);
  time.Day = date.getDate();
  time.TDay = time.Day < 10 ? "0" + time.Day : String(time.Day);
  time.Hour = date.getHours();
  time.THour = time.Hour < 10 ? "0" + time.Hour : String(time.Hour);
  time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12;
  time.Thour = time.hour < 10 ? "0" + time.hour : String(time.hour);
  time.Minute = date.getMinutes();
  time.TMinute = time.Minute < 10 ? "0" + time.Minute : String(time.Minute);
  time.Second = date.getSeconds();
  time.TSecond = time.Second < 10 ? "0" + time.Second : String(time.Second);
  time.Millisecond = date.getMilliseconds();

  return sFormat.replace(/yyyy/ig, String(time.Year))
    .replace(/yyy/ig, String(time.Year))
    .replace(/yy/ig, time.TYear)
    .replace(/y/ig, time.TYear)
    .replace(/MM/g, time.TMonth)
    .replace(/M/g, String(time.Month))
    .replace(/dd/ig, time.TDay)
    .replace(/d/ig, String(time.Day))
    .replace(/HH/g, time.THour)
    .replace(/H/g, String(time.Hour))
    .replace(/hh/g, time.Thour)
    .replace(/h/g, String(time.hour))
    .replace(/mm/g, time.TMinute)
    .replace(/m/g, String(time.Minute))
    .replace(/ss/ig, time.TSecond)
    .replace(/s/ig, String(time.Second))
    .replace(/fff/ig, String(time.Millisecond))
}
