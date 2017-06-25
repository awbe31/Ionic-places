import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SaveInfoPage } from '../pages/save-info/save-info'
import { AutocompletePage } from '../components/autocomplete/autocomplete';
import { DataStorageProvider } from '../providers/data-storage/data-storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AutocompletePage,
    SaveInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AutocompletePage,
    SaveInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataStorageProvider
  ]
})
export class AppModule {}
