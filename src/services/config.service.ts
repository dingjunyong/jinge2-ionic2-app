import {Injectable} from 'angular2/core';

@Injectable()
export class ConfigService {
  
  // 获取主题
  getTopics(data) {
    let url = this.configService.getHost() + "/api/v1/topics";
    return this.http.get(url + helper.toQueryString(data)).map(
        res=>res.json().data
    ).catch(this.handleError);
  }
}
