import { Component } from '@angular/core';
import { NavController,App } from 'ionic-angular';
import { HttpService } from '../../service/httpService';
import { AboutPage } from '../about/about';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dataObj = [];
  constructor(
    public navCtrl: NavController,
    public appCtrl:App,
    public HttpService: HttpService,
    private storage: Storage,
  ) {
    setInterval(() => {
      this.getJsonData();
    },3000);
  }
  getJsonData(){
    var thisPage=this;
    this.HttpService.getJsonData(function(res){
      console.log(res)
      thisPage.dataObj = [...thisPage.dataObj, ...res];
    });
  }
  rootNav=this.appCtrl.getRootNav();
  addSelfPage(item){

    this.storage.set('lastLocPosition',{
      product_id : item.product_id,
      bid_price : item.bid_price,
      bid_quantity : item.bid_quantity,
      ask_price : item.ask_price,
      ask_quantity : item.ask_quantity,
    });
    console.log(item);
    // this.rootNav.push(AboutPage,{
    //   item:item
    // });
  }



  ionViewWillEnter(){
    this.getJsonData();
  }
}
