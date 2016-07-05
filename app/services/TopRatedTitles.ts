import {Injectable} from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class TopRatedTitles {
  public db: any;
  constructor() {
    this.db = firebase.database().ref('/highestRated');
  }
}