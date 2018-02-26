import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import {Http} from "@angular/http";
import "rxjs/Rx";
@Injectable()
export class HttpService {
  constructor(
    public alertCtrl: AlertController,
    public http: Http,
  ) {

  }
  getJsonData(successCallback){
    this.http.get("http://106.15.48.128:3000/quote.json")
      .map(res => res.json())
      .subscribe( function(data) {
        successCallback(data);
      });
  }
}
