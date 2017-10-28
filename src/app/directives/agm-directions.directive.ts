import { Directive, Input, SimpleChanges } from '@angular/core';
import {GoogleMapsAPIWrapper}  from '@agm/core';

declare var google: any;

@Directive({
  selector: 'agm-directions'
})
export class AgmDirectionsDirective {
  @Input() origin;
  @Input() destination;
  @Input() waypoints;
  constructor (private gmapsApi: GoogleMapsAPIWrapper) {}
  ngOnInit(){
    this.drawRoute();
  }

  drawRoute () {
    this.gmapsApi.getNativeMap().then(map => {
      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer;
      directionsDisplay.setMap(map);
      directionsDisplay.setDirections({routes: []});
      directionsService.route({
              origin: {lat: this.origin.lat, lng: this.origin.lng},
              destination: {lat: this.destination.lat, lng: this.destination.lng},
              waypoints: this.waypoints,
              optimizeWaypoints: true,
              travelMode: 'WALKING'
            }, function(response, status) {
                        if (status === 'OK') {
                          directionsDisplay.setDirections(response);
                        } else {
                          window.alert('Directions request failed due to ' + status);
                        }
      });
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (JSON.stringify(changes.waypoints.previousValue) == JSON.stringify(this.waypoints)) {
      return;
    } else {
      this.drawRoute();
    }
  }
}
