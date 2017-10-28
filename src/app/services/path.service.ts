import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class PathService {
  public wayPoints = [{
    lat: 47.3686498,
    lng: 8.5391825
  }]

  constructor(public http: Http) { }

  public addMarker () {
    this.wayPoints.push({
      lat: 47.3697169,
      lng: 8.536734
    })
  }

  public locationsArray () {
    var result = []
    // this.wayPoints.forEach(function(values) {
    //   result.push({location: values})
    // });
    return result;
  }

  public getFountains () {
    this.getFountainData().subscribe(data =>
      data.features.forEach(item => {
        this.wayPoints.push({
          lat: item.geometry.coordinates[1],
          lng: item.geometry.coordinates[0]
        })
      })
    );
    console.log(this.wayPoints);
  }

  public getFountainData(): Observable<any> {
    return this.http.get("./assets/brunnen.json")
                    .map((res:any) => res.json());

  }
}
