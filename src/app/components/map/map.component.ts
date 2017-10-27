import { PathService } from './../../services/path.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  lat: number = 47.3686498;
  lng: number = 8.5391825;
  style: object = [{
    featureType: 'all',
    elementType: 'geometry'
    // stylers    : [{
    //   color: '#f2f2f2'
    // }]
  }, {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers    : [{
      gamma: 0.01
    }, {
      lightness: 20
    }, {
      color: '#414141'
    }]
  }, {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers    : [{
      saturation: -31
    }, {
      lightness: -33
    }, {
      weight: 2
    }, {
      gamma: 0.8
    }, {
      visibility: 'off'
    }]
  }, {
    featureType: 'all',
    elementType: 'labels.icon',
    stylers    : [{
      visibility: 'off'
    }]
  }, {
    featureType: 'administrative.country',
    elementType: 'all',
    stylers    : [{
      color: '#b4b3b1'
    }]
  }, {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers    : [{
      lightness: 30
    }, {
      saturation: 50
    }]
  }, {
    featureType: 'poi',
    elementType: 'geometry',
    stylers    : [{
      saturation: 50
    }]
  }, {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers    : [{
      lightness: 20
    }, {
      saturation: 20
    }]
  }, {
    featureType: 'road',
    elementType: 'geometry',
    stylers    : [{
      lightness: 10
    }, {
      saturation: -30
    }]
  }, {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers    : [{
      color: '#ffffff'
    }]
  }, {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers    : [{
      saturation: 25
    }, {
      lightness: 25
    }, {
      visibility: 'on'
    }]
  }, {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers    : [{
      color: '#b4b3b1'
    }]
  }, {
    featureType: 'road',
    elementType: 'labels.text.stroke',
    stylers    : [{
      visibility: 'on'
    }, {
      color: '#b4b3b1'
    }, {
      weight: '0.4'
    }]
  }, {
    featureType: 'transit',
    elementType: 'all',
    stylers    : [{
      color: '#dddddd'
    }]
  }, {
    featureType: 'water',
    elementType: 'all',
    stylers    : [{
      lightness: -20
    }, {
      color: '#8296c4'
    }]
  }];

  constructor(public pathService: PathService) {
  }

  ngOnInit() {

  }

}
