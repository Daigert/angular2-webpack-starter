import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserValidationService {
  static LOGIN_KEY:string = 'login';
  private _userLogin:string = 'q';
  private _userPassword:string = 'q';

  constructor() {
  }

  public validateUser(login:string, password:string):Observable<boolean> {
    return Observable.create(observer => {

      setTimeout(() => {
        let result = (this._userLogin === login && this._userPassword === password);
        if (result) {
          localStorage.setItem(UserValidationService.LOGIN_KEY, login);
          observer.next(result);
        } else {
          observer.error(result);
        }
      }, 500);

    });
  }
  // if (this._userLogin === login && this._userPassword === password) {
  //   return Observable.of('q is logged in');
  // } else {
  //   return Observable.throw('User data is not correct')
  // }

}
