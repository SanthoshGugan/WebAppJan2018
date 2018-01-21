import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class Food2Fork {
  key: string;
  url: string;

  constructor(public http: Http) {
    this.key = '4a636f5c146207b1326542ab69140ae0';
    this.url = 'http://food2fork.com/api/get?key=' + this.key;
  }

  fetchFood() {
    return this.http.get(this.url);
  }


}
