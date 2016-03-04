import {Page} from 'ionic-angular';
import {Geolocation} from 'ionic-native';
@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  lat;
  long;
  constructor(){
      Geolocation.getCurrentPosition().then( (res)=>{
        this.lat =res.coords.latitude;
        this.long = res.coords.longitude
      })
  }
}
