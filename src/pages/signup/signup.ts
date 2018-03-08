import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { LoginPage } from '../login/login';
import { UsersProvider } from '../../providers/users/users';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  name: any;
  //username: string;
  email: any;
  password: any;
  //confirmPassword: string;

  constructor(public navCtrl: NavController,public http: Http, 
    public navParams: NavParams,public userServ:UsersProvider) {
  }

  register(){
      let user = {
      name: this.name,
      email: this.email,
      password: this.password,
      //confirmPassword: this.confirmPassword
    };
    
       this.userServ.addUser(JSON.stringify(user))
       this.navCtrl.push(LoginPage);
       //this.navCtrl.setRoot(HomePage);
       console.log("this is userLog",user);
        user={
          name: "",
          email: "",
          password: "",};
      

}

}

