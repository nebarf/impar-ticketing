import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ReportPage } from '../pages/report/report';
import { HomeTabs } from '../pages/home-tabs/tabs';
import { LoginPage } from "../pages/login/login";
import { ModifyAccessCodePage } from "../pages/manage-access-codes/manage-access-codes";
import { LogoComponent } from "../pages/pages-components/logo-component/logo-component";
import { ScanPage } from "../pages/scan/scan";
import { LogoutComponent } from "../pages/pages-components/logout-component/logout-component";
import { ScanResultPage } from "../pages/scan-result-tabs/scan-result-tabs";
import { SearchInfoComponent } from "../pages/pages-components/search-info-component/search-info";
import { TimeScanResultPage } from "../pages/time-scan-result/time-scan-result";
import { TicketScanResultPage } from "../pages/ticket-scan-result/ticket-scan-result";
import { ManifestScanResultPage } from "../pages/manifest-scan-result/manifest-scan-result";
import { PopoverMenu } from "../pages/popover-menu/popover-menu";
import { PopoverComponent } from "../pages/pages-components/popover-component/popover-component";
import { RegistrantScanResultPage } from "../pages/registrant-scan-result/registrant-scan-result";
import { SettingsService } from "../providers/settings-service";
import { WelcomePage } from "../pages/welcome/welcome";
import { VfsApiService } from "../providers/vfs-api-service";
import { SQLite } from "ionic-native";
import { Database } from "../providers/database/database";

@NgModule({
  declarations: [
    MyApp,
    ReportPage,
    HomeTabs,
    LoginPage,
    ModifyAccessCodePage,
    ScanPage,
    ScanResultPage,
    TimeScanResultPage,
    TicketScanResultPage,
    ManifestScanResultPage,
    RegistrantScanResultPage,
    WelcomePage,
    LogoComponent,
    LogoutComponent,
    SearchInfoComponent,
    PopoverComponent,
    PopoverMenu
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReportPage,
    HomeTabs,
    LoginPage,
    ScanPage,
    ScanResultPage,
    ModifyAccessCodePage,
    TimeScanResultPage,
    TicketScanResultPage,
    ManifestScanResultPage,
    RegistrantScanResultPage,
    WelcomePage,
    LogoutComponent,
    PopoverMenu
  ],
  providers: [
    SettingsService,
    VfsApiService,
    SQLite,
    Database
  ]
})
export class AppModule {}
