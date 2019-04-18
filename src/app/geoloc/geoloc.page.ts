import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-geoloc',
  templateUrl: './geoloc.page.html',
  styleUrls: ['./geoloc.page.scss'],
})
export class GeolocPage implements OnInit {

  location:any = {lat:"",lon:""}

  constructor(private geolocation: Geolocation) {}

  ngOnInit() {
  }
  
  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.location.lat = resp.coords.latitude
      this.location.lon = resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
