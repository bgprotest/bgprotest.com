import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandsComponent } from './demands/demands.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { AbroadComponent } from './abroad/abroad.component';
import { AbroadCardComponent } from './abroad-card/abroad-card.component';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { MatDividerModule } from '@angular/material/divider';
import { OverviewComponent } from './overview/overview.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { FactsComponent } from './facts/facts.component';

@NgModule({
  declarations: [DemandsComponent, MapComponent, HomeComponent, AbroadComponent, AbroadCardComponent, OverviewComponent, FactsComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    TranslateModule,
    MatDividerModule,
    SlideshowModule
  ],
  exports: [
    DemandsComponent,
    MapComponent,
    HomeComponent,
    AbroadComponent,
    OverviewComponent,
    FactsComponent
  ]
})
export class PagesModule { }
