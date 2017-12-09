import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions
 } from '@ionic-native/google-maps';
import { ChequeoPage } from '../chequeo/chequeo';
 


@Component({
  selector: 'page-zona',
  templateUrl: 'zona.html',
})
export class ZonaPage {

  map: GoogleMap;
 
 

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private googleMaps: GoogleMaps) {}


  ionViewDidLoad() {
    console.log("zona");
    this.loadMap();
    
  } 
  loadMap() {
    
        let mapOptions: GoogleMapOptions = {
          camera: {
            target: {
              lat: 24.02772,
              lng: -104.653176
            },
            zoom: 18,
            tilt: 30
          }
        };
    
        this.map = this.googleMaps.create('map_canvas', mapOptions);
    
        // Wait the MAP_READY before using any methods.
        this.map.one(GoogleMapsEvent.MAP_READY)
          .then(() => {
            console.log('Map is ready!');
    
            // Now you can use all methods safely.
            this.map.addMarker({
                title: 'Zona 1',
                icon: 'blue',
                animation: 'DROP',
                position: {
                  lat: 24.02772,
                  lng: -104.653176
                }
              })
              .then(marker => {
                marker.on(GoogleMapsEvent.MARKER_CLICK)
                  .subscribe(() => {
                    alert('Comienza el chequeo de parquimetros en la zona');
                    this.irAchequeo();
                  });
              });
    
          });
      }

      irAchequeo(){
        this.navCtrl.push(ChequeoPage);
      }
}
