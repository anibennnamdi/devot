import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DevotionService {
  baseurl: string;
  

  constructor(public http: Http) {
    console.log('Hello DevotionService Provider');
    this.baseurl = "https://devotionapp.herokuapp.com/api/v1/devotion/";
  }
  fetchDevotion() {
    return this.http.get(this.baseurl)
      .map(res => res.json());

  }

}
