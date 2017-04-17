import {FormControl} from "@angular/forms";
/**
 * Created by adks001 on 2017/4/17.
 */

//验证Email
export function emailValidator(control:FormControl):{[s:string]:boolean}{
  if (!control.value.match(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/)) {
    return { invalidEmail: true };
  }
}
//验证用户昵称
export function nicknameValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^[(\u4e00-\u9fa5)0-9a-zA-Z\_\s@]+$/)) {
    return { invalidNickname: true };
  }
}
