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
      lat: 47.36954260437829,
      lng: 8.541127145290375,
      info: 'fraumunster',
      title: 'Fraumünster-Kreuzgang',
      description: 'Im 9. Jahrhundert als königliches Eigenkloster gegründet. Die heutige Kirche gröss- tenteils aus dem 13./14. Jahrhundert. Um 1900 Abbruch der alten Klostergebäude und Neubau des Stadthauses. Neuschöpfung des Kreuzgangs unter Verwendung romani- scher Originalteile. Malereizyklus von Paul Bodmer (1932–1941) mit Legenden um die enthaupteten Stadtheiligen Felix, Regula und Exuperantius sowie Karl den Grossen in Zürich (Schlange) und die Gründung des Fraumünsters (Hirsch). www.fraumuenster.ch'
    },{
      lat: 47.37025469583767,
      lng: 8.544241189956665,
      info: 'grossmunster',
      image: 'grossmunster.png',
      title: 'Grossmünster-Kreuzgang',
      description: 'Auf den Gräbern der Stadtheiligen Felix und Regula gegründetes Chorherrenstift. Der heutige Bau stammt aus dem 12./13. Jahrhundert. Die Türme wiesen bis zu ei- nem Brand des Glockenturms 1763 hohe Spitzhelme auf. Die östlich angebauten Stiftsgebäude wurden 1850 abgebrochen und durch Neubauten ersetzt. Im Innen- hof bedeutender romanischer Kreuzgang (um 1170/80). www.grossmuenster.ch'
    },{
      lat: 47.37418919113348,
      lng: 8.543779850006104,
      info: 'niederdorf',
      title: 'Niederdorfstrasse',
      description: 'Der Strassenzug Niederdorfstrasse/Münstergasse/Oberdorfgasse war bis ins 18. Jahr- hundert die Hauptverkehrsache durch diesen Teil der alten Stadt. Das Limmatquai ist erst im 19. Jahrhundert durch Aufschüttungen in der Limmat geschaffen worden.'
    },{
      lat: 47.3744151,
      lng: 8.541178100000025,
      info: 'urania',
      title: 'Parkhaus Urania, Kloster Oetenbach',
      description: 'Im Haupteingang zwischen Kasse und Lift ein Wandbild mit Texten, historischen Fotos und Plänen zur Geschichte dieses Quartiers, unter anderem zu einem Goldfund aus der Römerzeit, zum mittelalterlichen Oetenbachkloster, zur später darin eingerichte- ten ersten kantonalen Strafanstalt und zum Durchbruch der heutigen Uraniastrasse im frühen 20. Jahrhundert.'
    },{
      lat: 47.37518457554966,
      lng: 8.533737659454346,
      info: 'sihlraum',
      image: 'sihlraum.png',
      title: 'Sihlraum und Kaserne',
      description: 'Die heute kanalisierte und gezähmte Sihl war während Jahrhunderten eine stän- dige Bedrohung für den Siedlungsraum Zürich. Das Sihlfeld ist ein riesiges vor- geschichtliches Flussdelta, ebenso die Zürcher Innenstadt (vergleiche Bild). Die Zähmung der Sihl war von der keltisch- römischen Zeit bis in die Neuzeit ein prä- gendes Thema für den Siedlungsraum Zürich. Die Kaserne wurde 1873–1875 an der Grenze zwischen der Stadt und der Gemeinde Aussersihl errichtet.'
    },{
      lat: 47.37440352732135,
      lng: 8.53514850139618,
      info: 'schanzengraben',
      image: 'schanzengraben.png',
      title: 'Schanzengraben',
      description: 'Teil der im 17. Jahrhundert errichteten und nach 1830 abgebrochenen baro- cken Stadtbefestigung. Der Wassergraben und die zugehörigen Bastionen waren ursprünglich viel stärker gegliedert als heute. Vergleiche dazu untenstehenden Planausschnitt.'
    },{
      lat: 47.3738840330239,
      lng: 8.53885531425476,
      info: 'rennweg',
      image: 'rennweg.png',
      title: 'Rennweg',
      description: 'Im 13. Jahrhundert planmässig angeleg- tes Stadtquartier. Das mittelalterliche Rennwegtor wurde 1521–1525 durch das mächtige Rennwegbollwerk ersetzt. Die- ses Stadttor bildete bis zum Bau der ba- rocken Schanzen den Eckpunkt der Stadt an der Hauptstrasse gegen Westen. Beim Bau der Bahnhofstrasse in den 1860er Jahren wurde es abgebrochen.'
    },{
      lat: 47.374250949107456,
      lng: 8.54011595249176,
      info: 'modell',
      title: 'Aktuelles Modell der Stadt Zürich im Amtshaus IV',
      description: 'Öffentlich zugänglich und stimmungsvoll präsentiert im Zwischengeschoss des Amtshauses IV (Eingang von der Lindenhofstrasse). Das Modell dient unter anderem den städtischen Baubehörden zur Begutach- tung von Bauprojekten. Öffnungszeiten: Mo–Fr 08–17 Uhr'
    },{
      lat: 47.373048472020216,
      lng: 8.541038632392883,
      info: 'lindenhof',
      title: 'Lindenhof-Terrasse',
      description: 'Kuppe eines Moränenhügels, an dessen Abhängen seit spätkeltischer Zeit die Sied- lung Turicum/Zürich entstand. Die heutige Lindenhof-Terrasse geht grösstenteils auf das spätrömische Kastell zurück. Im Mittelalter Königspalast («Pfalz»), in dem von Zeit zu Zeit der jeweilige König oder Kaiser des Deutschen Reiches mit seinem Hofstaat residierte. Im 13. Jahrhundert Abbruch der Pfalz, seither Frei äche.'
    },{
      lat: 47.3711012,
      lng: 8.540695300000039,
      info: 'peterhofstatt',
      title: 'St. Peterhofstatt',
      description: 'Die Kirche St. Peter ist eine der ältesten Kirchengründungen der Stadt und war als einzige keine Klosterkirche. An dieser exponierten Lage befand sich möglicherweise bereits ein keltisch-römisches Heiligtum. Der Turm reicht bis ins 13. Jahrhundert zu- rück und beherbergte bis ins frühe 20. Jahrhundert einen Feuerwächter. 1366 wurde am Turm die erste Uhr der Stadt montiert, die heutige stammt von 1539.'
    },{
      lat: 47.3712955,
      lng: 8.54127410000001,
      info: 'thermengasse',
      title: 'Thermengasse',
      description: 'Baureste der römischen Bäder von Zürich aus dem 1. bis 3. Jahrhundert n. Chr. Erhal- ten sind Teile des mächtigen Ofens (Praefurnium) sowie Pfeiler der Heizanlage (Hypocaust) unter den Warmräumen Caldarium und Tepidarium. Die Überreste sind am Ort mit Plänen und Rekonstruktionen erklärt.'
    },{
      lat: 47.3701954,
      lng: 8.541028500000039,
      info: 'munsterhof',
      title: 'Münsterhof',
      description: 'Ursprünglich durch den Friedhof des Fraumünsters und verschiedene Bauten belegt, seit dem 13. Jahrhundert städtischer Platz etwa im heutigen Umfang. In der P ästerung sind der Verlauf der ehemaligen Friedhofsmauer und der angebauten Häuser markiert.'
    },{
      lat: 47.36971699501239,
      lng: 8.538922369480133,
      info: 'paradeplatz',
      title: 'Paradeplatz',
      description: 'Freiraum vor der Wollishoferpforte der mittelalterlichen Stadtmauer. Unter anderem als Viehmarkt benutzt, daher sein alter Name «Säumarkt».'
    }
  ];
  public currentPointId = 0;
  public markerId = '';
  public mapMode = false;
  public showFountain = false;
  public showArt = false;
  public showRubbish = false;
  public showToilets = false;

  constructor(public http: Http) { }

  public toggleMode () {
    this.sightSeeingPoints = [];
    // Somehow this reset does not work yet
    // we also have to reset the map!
    // this.wayPoints = [];
    this.mapMode = !this.mapMode;

    if (!this.mapMode) {
      this.currentPointId = 0;
      this.addMarker();
    }
  }

  public addMarker () {
    this.clearMap();
    this.wayPoints.push(this.pathMarkers[this.currentPointId])
    this.currentPointId += 1;
    // if (this.currentPointId == 8) {
    //   this.mapMode = true;
    // }
  }

  public locationsArray () {
    var result = []
    this.wayPoints.forEach(function(values) {
      result.push({location: values})
    });
    result.shift();
    result.pop();
    return result;
  }

  public clearMap () {
    this.sightSeeingPoints = [];
    this.showArt = false;
    this.showFountain = false;
    this.showRubbish = false;
    this.showToilets = false;
  }

  public getFountains () {
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

  public recalculateWaypoints() {
    this.sightSeeingPoints = [];
    // code here
    if (this.showFountain) {
      this.getFountains();
    }
    if (this.showArt) {
      this.getArtInstallations();
    }
    if (this.showRubbish) {
      this.getBins();
    }
    if (this.showToilets) {
      this.getToilets();
    }
  }
}
