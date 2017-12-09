import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ZonaPage } from '../../pages/index.paginas'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  zona: any = ZonaPage;


  constructor(public navCtrl: NavController) {

  }

}
