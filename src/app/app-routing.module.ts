import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from './pages/map/map.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  // {
  //   path: 'map',
  //   component: MapComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
