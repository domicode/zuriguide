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

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WalkingpathComponent,
    FooternavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [PathService],
  bootstrap: [AppComponent]
})
export class AppModule { }
