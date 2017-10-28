import { HttpModule } from '@angular/http';
import { PathService } from './services/path.service';
import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { WalkingpathComponent } from './components/walkingpath/walkingpath.component';
import { FooternavComponent } from './components/footernav/footernav.component';
import { AgmDirectionsDirective } from './directives/agm-directions.directive';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WalkingpathComponent,
    FooternavComponent,
    AgmDirectionsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCKx7Fof-4nzEJN9NWesam0p4jDgf6NxBY'
    }),
    HttpModule
  ],
  providers: [PathService],
  bootstrap: [AppComponent]
})
export class AppModule { }
