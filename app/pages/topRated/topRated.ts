import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {TopRatedTitleItem} from "../../components/topRatedTitle/topRatedTitle";
import {TopRatedTitles} from '../../services/TopRatedTitles';
import {Loading} from "../../../node_modules/ionic-angular/components/loading/loading";

@Component({
  templateUrl: 'build/pages/topRated/topRated.html',
  directives: [TopRatedTitleItem],
  providers: [TopRatedTitles]
})
export class TopRated {
  private topRated: string[] = [];
  private loading;

  constructor(
    private navController: NavController,
    private topRatedTitles: TopRatedTitles,
    private platform: Platform
  ){
    this.presentLoading();

    this.topRatedTitles.db.on('value', data => {
      this.topRated = data.val();
      this.loading.dismiss();
    });
  }

  trackPage() {
    this.platform.ready().then(() => {
      window.analytics.trackView("Top Rated");
    });
  }

  presentLoading() {
    this.loading = Loading.create({
      content: "Searching Netflix...",
      duration: 10000
    });
    this.navController.present(this.loading);
  }
}