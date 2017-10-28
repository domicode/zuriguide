import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class PathService {
  public wayPoints = [];
  public sightSeeingPoints = [];
  public pathMarkers = [
    {
      lat: 47.366536,
      lng: 8.524687,
      info: 'bruecke',
      title: 'Hertersteg und Herterbrücke',
      description: 'Zur Erschliessung des neu entwickelten Hürlimann-Areals und zur Verbesserung der Fussgänger- und Fahrrad-Verbindung zwischen Enge und Wiedikon führen seit Juni 2005 der Hertersteg über die Sihl und die aus Lifttürmen, Treppen und Brückentrog bestehende Herterbrücke über die Bahnlinie der SZU. Die beiden Bauwerke wurden so konzipiert, dass kein einziger Baum gefällt werden musste.'
    },{
      lat: 47.367410,
      lng: 8.522458,
      info: 'puppendoktor',
      title: 'Zelgstrasse mit Puppendoktor',
      description: 'Nur wenige Meter vom Verkehrslärm der Manesseund der Sihlhochstrasse entfernt erstreckt sich um Wuhr- und Zelgstrasse ein ruhiges Wohnquartier mit Büros und Kleingewerbe, Kinderkrippe und Puppendoktor. Jutta und Karl Alber arbeiten in ihrer Puppenklinik seit über dreieinhalb Jahrzehnten für Private und Museen nicht nur aus der Region, sondern für Kundschaft von Stockholm bis Uruguay und restaurieren Teddys, Automaten und Puppen, die teilweise über 200 Jahre alt sind.'
    },{
      lat: 47.368667,
      lng: 8.519516,
      info: 'kollerwiese',
      title: 'Feedbackpoint Kollerwiese',
      description: 'Was beobachtest du? Welchen Aktivitäten kommen die Personen im Park nach?'
    },{
      lat: 47.368167,
      lng: 8.519668,
      info: 'museum',
      title: 'Cultural Experience',
      description: 'Ortsmuseum Wiedikon, Steinstrasse, 8003. Geniesst ein freier Eintritt ins Ortsmuseum Wiedikon. Bitte beim Eingang das Felix&DuDa App vorweisen.'
    },{
      lat: 47.367486,
      lng: 8.518386,
      info: 'buel',
      title: 'Bühl',
      description: 'Auf dem Bühl dem als Randmoräne des Linthgletschers entstandenen Hügel, gefiel es schon Kelten und Alemannen, wie Gräberfunde bezeugen. Bis vor gut hundert Jahren war der ganze «Rebhügel» mit Weinbergen bedeckt. In der Fasnachtszeit tanzte die Dorfjugend auf der Hügelkuppe um ein grosses Feuer, schlug glühende Scheiben ins Flachland und verbrannte eine Art Böögg. 1896 wurden die neugotische Kirche aus Backsteinen der Fabrik im Binz gebaut und wenige Jahre später die beiden Bühlschulhäuser.'
    },{
      lat: 47.362974,
      lng: 8.522477,
      info: 'fledermaus',
      title: 'Fledermauskästen',
      description: 'Einer Fledermaus-Schutzexpertin fiel 1998 im Amtsblatt die Ankündigung der Sihlhochstrassen-Sanierung auf. Sie wusste, dass sich im Bauwerk Fledermausquartiere befanden und nahm deswegen mit dem Kantonalen Tiefbauamt Kontakt auf. Es stellte sich heraus, dass sich die Fledermäuse in vertikalen Spalten aufzuhalten pflegten, welche bei den Sanierungsarbeiten verschwinden mussten. Als Ersatz werden den Fledermäusen nun in 18 drei Meter langen Fichtenholzkästen Hohlräume verschiedener Dicke angeboten, Unterschlupf für kleine wie für grosse Arten. Kontrollen haben gezeigt, dass die Kästen von Fledermäusen auch angenommen werden.'
    },{
      lat: 47.365019,
      lng: 8.525213,
      info: 'herlima',
      title: 'Ex-Bier',
      description: '1867 zog die Hürlimann-Brauerei von Feldbach in die Enge auf den Moränenhügel an der Sihl. Dreissig Jahre später wurde neben der Brauerei die schlösschenartige Fabrikantenvilla «Sihlberg» erbaut. Nach der Fusion mit Feldschlösschen wurde die Produktion 1997 eingestellt. Seitdem erfolgte ein Umbau des Areals zum Wohn-, Arbeits- und Freizeitort mit Ladenpassage, Restaurant, Büro- und Gewerberäumen, Seniorenresidenz, Hotel und Thermalbad im ehemaligen Maschinenhaus. 2004 ist der neue Aqui-Brunnen eingeweiht worden, der lauwarmes Mineralwasser spendet, welches 1974 bei einer Tiefenbohrung 500 Meter unter dem Boden entdeckt worden war.'
    },{
      lat: 47.367519,
      lng: 8.526682,
      info: 'herlima',
      title: 'Feedback point Spielplatz Sihlpromenade',
      description: 'Was fällt dir auf bei diesem Spielplatz? Was könnte man verbessern?'
    }
  ];
  public currentPointId = 0;
  public markerId = '';
  public mapMode = true;

  constructor(public http: Http) { }

  public toggleMode () {
    this.sightSeeingPoints = [];
    this.wayPoints = [];
    this.mapMode = !this.mapMode;

    if (!this.mapMode) {
      this.currentPointId = 0;
      this.addMarker();
    }
  }

  public addMarker () {
    this.wayPoints.push(this.pathMarkers[this.currentPointId])
    this.currentPointId += 1;
    if (this.currentPointId == 8) {
      this.mapMode = true;
    }
  }

  public locationsArray () {
    var result = []
    this.wayPoints.forEach(function(values) {
      result.push({location: values})
    });
    result.shift();
    result.pop();
    console.log(result);
    return result;
  }

  public clearMap () {
    this.wayPoints = [];
    this.sightSeeingPoints = [];
    this.mapMode = true;
  }

  public getFountains () {
    this.wayPoints = [];
    this.getFountainData().subscribe(data =>
      data.features.forEach(item => {
        this.sightSeeingPoints.push({
          lat: item.geometry.coordinates[1],
          lng: item.geometry.coordinates[0],
          icon: "./assets/drop.png"
        })
      })
    );
  }

  public getFountainData(): Observable<any> {
    return this.http.get("./assets/brunnen.json")
                    .map((res:any) => res.json());

  }

  public getArtInstallations () {
    this.wayPoints = [];
    this.getArtData().subscribe(data =>
      data.features.forEach(item => {
        this.sightSeeingPoints.push({
          lat: item.geometry.coordinates[1],
          lng: item.geometry.coordinates[0],
          icon: "./assets/abstract.png"
        })
      })
    );
  }

  public getArtData(): Observable<any> {
    return this.http.get("./assets/kunst.json")
                    .map((res:any) => res.json());

  }

  public getToilets () {
    this.wayPoints = [];
    this.getToiletData().subscribe(data =>
      data.features.forEach(item => {
        this.sightSeeingPoints.push({
          lat: item.geometry.coordinates[1],
          lng: item.geometry.coordinates[0],
          icon: "./assets/toilet.png"
        })
      })
    );
  }

  public getToiletData(): Observable<any> {
    return this.http.get("./assets/toilets.json")
                    .map((res:any) => res.json());

  }

  public getBins () {
    this.wayPoints = [];
    this.getBinData().subscribe(data =>
      data.features.forEach(item => {
        this.sightSeeingPoints.push({
          lat: item.geometry.coordinates[1],
          lng: item.geometry.coordinates[0],
          icon: "./assets/garbage.png"
        })
      })
    );
  }

  public getBinData(): Observable<any> {
    return this.http.get("./assets/trashbins.json")
                    .map((res:any) => res.json());

  }
}
