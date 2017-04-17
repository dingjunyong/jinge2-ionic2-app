/**
 * Created by adks001 on 2017/4/17.
 */

//图片实体类
export class Picture{
  Id:number;
  Position:number;
  Src:string;
  Attachment:string;
}

//首页Activity实体类
export class Activity{
  Picture:Picture;
  Link:string;
}
//首页滑动栏目
export class Nivoslider{
  Picture:Picture;
  Text:string;
  Link:string;
}
//首页滑动栏目下的导航栏目
export class CatalogNavigation{
  Picture:Picture;
  Text:string;
  Link:string;
}
//首页滑动栏目上的TAB栏目
export class TabKeyword{
  Text:string;
  Link:string;
}

export class SearchTerm{
  Id:number;
  Keyword:string;
  Count:number;
}






