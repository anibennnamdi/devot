import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UsersProvider } from '../../providers/users/users';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email:any;
  password:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public userServ:UsersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  register(){
    this.navCtrl.push('SignupPage');
  }
  login(){
    let user = JSON.stringify({
      "email": this.email,
      "password": this.password,
    });
    this.userServ.checkUser(user);
  
    this.navCtrl.push(HomePage);
  }

}
