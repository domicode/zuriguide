import { Injectable } from '@angular/core';

@Injectable()
export class PathService {
  public wayPoints = [{
    lat: 47.3686498,
    lng: 8.5391825
  }]

  constructor() { }

  public addMarker () {
    // adds a marker
    this.wayPoints.push({
      lat: 47.3697169,
      lng: 8.536734
    })
  }
}
