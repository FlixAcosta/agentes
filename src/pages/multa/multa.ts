import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-multa',
  templateUrl: 'multa.html',
})
export class MultaPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public toastCtrl: ToastController) {
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Multa registrada con éxito',
      duration: 2000
    });
    toast.present();
  }
}
