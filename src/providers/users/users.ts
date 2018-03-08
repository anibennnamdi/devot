//import { HttpClient } from '@angular/common/http';
import { Http,Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {
  baseurl: string;
  baseurl2:string;

  constructor(public http: Http) {
    console.log('Hello UsersProvider Provider');
    this.baseurl = "https://devotionapp.herokuapp.com/api/v1/users/add";
    this.baseurl2 = "https://devotionapp.herokuapp.com/api/v1/users/check";
    
  }
  
  addUser(data) {
    let headers = new Headers(
      {
        'Content-Type' : 'application/json'
      });
      let options = new RequestOptions({ headers: headers });
      
    //return this.http.post(this.baseurl,data)
    return new Promise((resolve, reject) => {
      this.http.post(this.baseurl, data, options)
      .toPromise()
      .then((response) =>
      {
        console.log('API Response : ', response.json());
        resolve(response.json());
      })
      .catch((error) =>
      {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });

  }
  checkUser(data){
    let headers = new Headers(
      {
        'Content-Type' : 'application/json;'
      });
      let options = new RequestOptions({ headers: headers });
      
    //return this.http.post(this.baseurl,data)
    return new Promise((resolve, reject) => {
      this.http.post(this.baseurl2, data, options)
      .toPromise()
      .then((response) =>
      {
        console.log('API Response : ', response.json());
        resolve(response.json());
      })
      .catch((error) =>
      {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
        //reject(error.json());
      });
    });

  }

}
/*
return new Promise((resolve, reject) => {
  this.http.post(this.baseurl, data, options)
  .toPromise()
  .then((response) =>
  {
    console.log('API Response : ', response.json());
    resolve(response.json());
  })
  .catch((error) =>
  {
    console.error('API Error : ', error.status);
    console.error('API Error : ', JSON.stringify(error));
    reject(error.json());
  });
});
*/