import { Injectable } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { RequestOptions } from '@angular/http';
@Injectable()
export class ShoppingChrtService {

  constructor(private http: HttpClient) {debugger }  // items2=[

  items:any;

  getProduct(){
    return this.http.get("http://localhost:3000/items")
    .map(res =>this.get(res as Response))
    .catch(this.handleError);// return this.http
  }

  get(res: Response){
    debugger
    let body = res;
    debugger
    return body;
  }

  private handleError (error: any) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  updateItem(id,updatedItem):Observable<any>{
      const _url = `http://localhost:3000/items/${id}`;
      return this.http.put(_url, updatedItem)
          .map(success => console.log(JSON.stringify(success)))
          .catch(this.handleError);
  }
}
