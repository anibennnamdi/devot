import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { DevotionService } from '../../providers/devotion-service';
@IonicPage()
@Component({
  selector: 'page-single',
  templateUrl: 'single.html',
})
export class Single {
  items: any;
  devoList: any = [];
  devoListOffline: any = [];

  newList: any
  x: any;
  ministryId: any;

  // canEnter: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public srv: DevotionService,public loadingCtrl: LoadingController) {

  }
  ionViewCanEnter() {
  }

  ionViewDidLoad() {
    
      let loader = this.loadingCtrl.create({
        content: "Please Wait.../Biko Chere... /Ejo Eduro...",
        duration: 2000
      });
      loader.present();
    
      this.loadDevotion();
    //console.log("itemObj=", this.items)

  }
  loadDevotion() {
    let minObj = this.navParams.get("item");
    // this.items = this.navParams.get("item");
    this.ministryId = minObj.minName.toUpperCase();
    console.log("clicked id", minObj._id);
    this.srv.fetchDevotion().subscribe(res => {
      this.devoList = res.data;
      console.log("devoList", res.data);
      window.localStorage.setItem('devo',JSON.stringify(this.devoList));
      this.devoListOffline=JSON.parse(window.localStorage.getItem('devo'));
      //console.log("devoList1", this.devoList);
     /* this.devoList = this.devoList.filter((element) => {
      
        //this.devoList.minName = minObj.minName;
        return element.ministry_id == minObj._id;
      });*/
      
      this.devoListOffline = this.devoListOffline.filter((element) => {
      
        //this.devoList.minName = minObj.minName;
        return element.ministry_id == minObj._id;
      });
    });

  }
 
}
