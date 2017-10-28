import { GoogleMapsAPIWrapper } from '@agm/core';
import { Directive, Output, EventEmitter } from '@angular/core';

declare var google: any;

@Directive({
  selector: 'agm-location-marker'
})
export class AgmLocationMarkerDirective {
  marker: any;
  map: any;

  @Output('positionChanged') change: EventEmitter<any> = new EventEmitter();

  constructor (private gmapsApi: GoogleMapsAPIWrapper) {}

  ngOnInit(){
    this.gmapsApi.getNativeMap().then(map => {
      if (!navigator.geolocation) return;

      this.map = map;
      navigator.geolocation.watchPosition(this.onPositionUpdate.bind(this), function(err) {
        console.log('Unable to get location:', err)
      }, {
        enableHighAccuracy: true,
        maximumAge: 1000
      })
    });
  }

  onPositionUpdate(position) {
    let pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }

    // Emit position change event
    this.change.emit(pos)

    if (this.marker) {
      // Update marker position
      this.marker.setPosition(pos)
      return;
    }

    var image = './assets/relaxing-walk.png';


    // Marker needs to be created
    this.marker = new google.maps.Marker({
      map: this.map,
      position: pos,
      icon: image,
      size: '10'
    })

    this.map.setCenter(this.marker.getPosition())
  }
}
