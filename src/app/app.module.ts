import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DevotionService } from '../providers/devotion-service';
import { MinistryService } from '../providers/ministry-service';
import { HomePage } from '../pages/home/home';

import { MyApp } from './app.component';
import { UsersProvider } from '../providers/users/users';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MinistryService,
    DevotionService,
    UsersProvider
  ]
})
export class AppModule {}
