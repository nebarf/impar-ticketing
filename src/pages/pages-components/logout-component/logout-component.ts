/**
 * Created by francesco on 16/10/2016.
 */
import { Component } from '@angular/core';
import { App, AlertController } from "ionic-angular";
import { LoginPage } from "../../login/login";
import { SettingsService } from "../../../providers/settings-service";

@Component({
  selector: 'logout',
  template:
    `
      <button ion-button clear (click)="logout()">
        <!-- <ion-icon name="log-out" class="larger-icon"></ion-icon> -->
        <ng-content></ng-content>
      </button>
    `
})
export class LogoutComponent {

  /**
   * @constructor
   * @param app
   * @param alertCtrl
   */
  constructor(private app: App,
              private alertCtrl: AlertController,
              private settingsService: SettingsService){ }

  /**
   * Show a confirmation alert and accomplish or not the
   * logout using authentication service basing on user choice
   */
  logout() {
    this.alertCtrl.create({
      title: 'Logout',
      message: 'Do you really want to log out?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            this.settingsService.resetLogged()
              .then(() => {
                this.app.getRootNav().setRoot(LoginPage, {},
                  {animate: true, direction: 'forward'});
              });
          }
        }
      ]
    }).present();
  }
}