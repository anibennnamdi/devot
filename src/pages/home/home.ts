import { Component } from '@angular/core';
import { IonicPage,LoadingController, NavController/*, NavParams, AlertController*/ } from 'ionic-angular';
import { MinistryService } from '../../providers/ministry-service';
import { DevotionService } from '../../providers/devotion-service';
@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mylistData: any[] = null;
  ministyList:any[];
  myImage: any[];
  constructor(public navCtrl: NavController, public listService: MinistryService,public srv: DevotionService,
    public loadingCtrl: LoadingController) {

  }
  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: "Please Wait.../Biko Chere... /Ejo Eduro...",
      duration: 2000
    });
    loader.present();
  
    this.getMinlist();
    //this.getMinlist()
  }
  
  getMinlist() {
    this.listService.getPosts1().subscribe(res => {
      this.mylistData = res.data ||JSON.parse(window.localStorage.getItem('ministry'));
      window.localStorage.setItem('ministry',JSON.stringify(this.mylistData));
      this.ministyList=JSON.parse(window.localStorage.getItem('ministry'));

      //return this.mylistData;
      return this.ministyList;
    });
  }
  doRefresh(refresher) {
    this.mylistData = [];
    //console.log('Datas', this.mylistData);
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
    this.getMinlist();
  }
  gotoDetails(clk) {
    this.navCtrl.push('Single', { item: clk});
    console.log("Loading Details Page", clk);
  }
  getimg() {


  }


}