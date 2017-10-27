import { WalkingpathComponent } from './components/walkingpath/walkingpath.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'walking-route', pathMatch: 'full' },
  { path: 'walking-route',
  component: WalkingpathComponent,
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
