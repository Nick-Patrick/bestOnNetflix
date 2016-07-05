import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TitleDetails} from "../../pages/titleDetails/titleDetails";


@Component({
  selector: 'TopRatedTitleItem',
  templateUrl: 'build/components/topRatedTitle/topRatedTitle.html',
  inputs: ['title: title']
})
export class TopRatedTitleItem {
  constructor(
    private _navController: NavController
  ) {
  }

  selectTitle(title) {
    console.log(title);
    this._navController.push(TitleDetails, {title: title});
  }
}