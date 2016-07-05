import {Component} from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/titleDetails/titleDetails.html'
})
export class TitleDetails {

  private title:any;
  private flags:string[] = [];

  constructor(
    private _navController:NavController,
    private _navParams:NavParams,
    private platform: Platform
  ) {

    this.title = this._navParams.data.title;
    this.flags = this.getCountryFlags();
    this.trackPage(this.title);
  }

  goBack() {
    this._navController.pop();
  }

  getCountryFlags() {
    var flags = [];
    this.title.countries.map((country) => {
      flags.push(country.key.toLowerCase());
    });
    return flags;
  }

  trackPage(title) {
    this.platform.ready().then(() => {
      window.analytics.trackView("Title: " + title.title);
    });
  }

  playTrailer(title) {
    var youtubeUrl = "https://www.youtube.com/watch?v=" + title.videos[0].key;
    window.open(youtubeUrl, "_system");
  }
}