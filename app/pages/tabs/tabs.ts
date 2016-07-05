import {Component} from '@angular/core'
import {TopRated} from '../topRated/topRated';
import {MostPopular} from '../mostPopular/mostPopular';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = TopRated;
    this.tab2Root = MostPopular;
  }
}
