import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Constants } from '../constants/constants';

@Injectable()
export class MinistryService {
  baseurl: string;
  //imgConst:string;

  constructor(public http: Http) {
    this.baseurl = "https://devotionapp.herokuapp.com/api/v1/ministries.json";
  }

  getPosts1() {
    return this.http.get(this.baseurl)
      .map(res => res.json());

  }
  
}
