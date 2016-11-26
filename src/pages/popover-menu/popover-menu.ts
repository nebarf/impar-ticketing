import { Component } from '@angular/core';
import { ViewController, App } from 'ionic-angular';
import { ScanResultService } from "../../services/scan-result/scan-result-service";
/**
 * Created by francesco on 16/10/2016.
 */

@Component({
  selector: 'page-popover-menu',
  templateUrl: 'popover-menu.html'
})
export class PopoverMenu {

  /**
   * @constructor
   * @param {ScanResultService} scanResultService
   * @param {View} view
   * @param {App} app
   */
  constructor(private scanResultService: ScanResultService,
              private view: ViewController,
              private app: App) { }

  /**
   * Redirect to home page
   */
  goHome() {
    this.dismissMenu();
    this.app.getRootNav().pop();
  }

  /**
   * Reset scan results and dismiss the menu
   */
  dismissMenu() {
    this.scanResultService.resetAll();
    this.view.dismiss();
  }
}
