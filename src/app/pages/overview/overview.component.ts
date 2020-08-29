import { Component, OnInit } from '@angular/core';
import { LangComponent } from 'src/app/shared/lang-component';
import { GoogleSheetsService } from 'src/app/shared/google-sheets.service';
import { TranslateService } from '@ngx-translate/core';
import { GoogleSheetsURLs } from 'src/app/shared/google-sheets-data';
import { parseSheetsData } from 'src/app/shared/google-sheets-parser';

export interface Overview {
  title: {}
  subtitle: {},
  text: {},
  startDate: string,
  citiesAbroad: string,
  citiesHome: string
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  subText: string;
  href?: string
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.sass']
})
export class OverviewComponent extends LangComponent implements OnInit {

  overview: Overview;

  tiles: Tile[];

  constructor(
    private sheetsService: GoogleSheetsService,
    private _translate: TranslateService
  ) {
    super(_translate);
  }

  ngOnInit(): void {
    this.sheetsService.getJsonData(GoogleSheetsURLs.overviewURL).subscribe(
      data => {
        this.overview = parseSheetsData<Overview>(data)[0];
        this.tiles = [
          {text: this.overview.startDate, subText: 'startDateSubText', cols: 4, rows: 1, color: '#fff'},
          {text: this.overview.citiesHome, subText: 'citiesHomeSubText', cols: 4, rows: 1, color: '#22b573'},
          {text: this.overview.citiesAbroad, subText: 'citiesAbroadSubText', cols: 4, rows: 1, color: '#ff1d25', href: '#abroad-page'}
        ]
      }
    );
  }

}
