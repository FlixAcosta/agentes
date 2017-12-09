import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MultaPage } from '../multa/multa';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-chequeo',
  templateUrl: 'chequeo.html',
})
export class ChequeoPage {

  multa: any = MultaPage

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public toastCtrl: ToastController) {
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Compartiendo ubicación',
      duration: 2000
    });
    toast.present();
  }
 

}
