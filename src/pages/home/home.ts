import { Component } from '@angular/core';
import { IonicPage, NavController  } from 'ionic-angular';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  openForgotPasswordPage() {
    // console.log('TEst');
    this.navCtrl.push(ForgotpasswordPage);
  }

}
