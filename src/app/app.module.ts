import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { ConfirmotpPage }  from '../pages/confirmotp/confirmotp';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { RegisterPage } from '../pages/register/register';
@NgModule({
  declarations: [
    MyApp,
   HomePage,
   ForgotpasswordPage,
   ConfirmotpPage,
   ResetpasswordPage,
   RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ForgotpasswordPage,
    ConfirmotpPage,
    ResetpasswordPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
