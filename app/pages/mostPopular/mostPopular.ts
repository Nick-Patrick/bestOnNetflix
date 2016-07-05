import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {TitleItem} from "../../components/title/title";
import {MostPopularTitles} from '../../services/MostPopularTitles';
import {Loading} from "../../../node_modules/ionic-angular/components/loading/loading";

@Component({
  templateUrl: 'build/pages/mostPopular/mostPopular.html',
  directives: [TitleItem],
  providers: [MostPopularTitles]
})
export class MostPopular {
  private popularTitles: string[] = [];
  private loading;

  constructor(
    private navController: NavController,
    private mostPopularTitles: MostPopularTitles,
    private platform: Platform
  ){
    this.presentLoading();

    this.mostPopularTitles.db.on('value', data => {
      this.popularTitles = data.val();
      this.loading.dismiss();
    });

    this.trackPage();

  }

  trackPage() {
    this.platform.ready().then(() => {
      window.analytics.trackView("Most Popular");
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