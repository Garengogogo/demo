import { Component } from '@angular/core';
import { NavController,App } from 'ionic-angular';
import { HttpService } from '../../service/httpService';
import { NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  newdataObj = [];
  dataObj = [];
  isFlag : boolean = false;
  constructor(
    public navCtrl: NavController,
    public appCtrl:App,
    private navParams:NavParams,
    private storage: Storage,
    public HttpService: HttpService,
  ) {
    // setInterval(() => {
    //   this.getJsonData();
    // },3000);
  }
  getJsonData(){
  var thisPage=this;
  this.HttpService.getJsonData(function(res){
    console.log(res)
    thisPage.newdataObj = res;
  });
}

  getData(){
    var thisPage=this;
    // thisPage.newdataObj=thisPage.navParams.get('item');
    thisPage.storage.get('lastLocPosition').then((val) => {
      if(val){
        this.isFlag = true;
        thisPage.dataObj = [...thisPage.dataObj, val];
        new Set(thisPage.dataObj);
        console.log(thisPage.dataObj);
      }else {
        this.isFlag = false;
      }
    })
    // thisPage.dataObj = [...thisPage.dataObj, thisPage.newdataObj];

  }


  ionViewWillEnter(){
    // this.getJsonData();
    this.getData();
  }

  ngOnInit(){

  }
}



