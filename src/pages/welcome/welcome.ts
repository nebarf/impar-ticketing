import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CredentialsService } from "../../services/credentials/credentials-service";
import { VfsApiService } from "../../services/vfs-api/vfs-api-service";
import { HomeTabs } from "../home-tabs/tabs";
import { LoginPage } from "../login/login";

/*
  Generated class for the Welcome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  /**
   * @constructor
   * @param navCtrl
   */
  constructor(private navCtrl: NavController,
              private credentialsService: CredentialsService,
              private vfsApiService: VfsApiService) {}

  /**
   * If authenticated, the user is redirected to home page.
   * If not, to login page
   */
  ionViewDidLoad() {
    Promise.all([
      this.credentialsService.getApiToken(),
      this.credentialsService.getEventID()
    ])
      .then((res) => {
        // If API token or event ID are set, user hasn't performed logout yet
        // so is currently authenticated
        if(res[0]) {
          this.vfsApiService.setCredentials(res[0], res[1]);
          this.navCtrl.setRoot(HomeTabs, {}, {animate: true, direction: 'forward'});
        }
        else {
          setTimeout(() => {
            this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
          }, 1500);
        }
      })
      .catch(err => console.log(err));
  }

}
