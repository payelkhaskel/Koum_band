import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ResetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html',
})
export class ResetpasswordPage {

  constructor(public alertCtrl: AlertController) {
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      subTitle: 'Password  Set',
      buttons: ['OK']
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpasswordPage');
  }

}
