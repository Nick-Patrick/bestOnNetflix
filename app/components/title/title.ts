import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TitleDetails} from "../../pages/titleDetails/titleDetails";

@Component({
  selector: 'TitleItem',
  templateUrl: 'build/components/title/title.html',
  inputs: ['title: title']
})
export class TitleItem {
  constructor(
    private _navController: NavController
  ) {
  }

  selectTitle(title) {
    console.log(title);
    this._navController.push(TitleDetails, {title: title});
  }
}