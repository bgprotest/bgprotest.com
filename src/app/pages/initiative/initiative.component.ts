import { Component, OnInit } from '@angular/core';
import { Tile } from '../overview/overview.component';
import { GoogleSheetsService } from 'src/app/shared/google-sheets.service';
import { TranslateService } from '@ngx-translate/core';
import { GoogleSheetsURLs } from 'src/app/shared/google-sheets-data';
import { parseSheetsData } from 'src/app/shared/google-sheets-parser';
import { LangComponent } from 'src/app/shared/lang-component';

export interface Initiative {
  text: {},
  link: string
}

@Component({
  selector: 'app-initiative',
  templateUrl: './initiative.component.html',
  styleUrls: ['./initiative.component.sass']
})
export class InitiativeComponent extends LangComponent implements OnInit {

  initiative: Initiative;

  tiles: Tile[];

  constructor(
    private sheetsService: GoogleSheetsService,
    private _translate: TranslateService
  ) {
    super(_translate);
  }

  ngOnInit(): void {
    this.sheetsService.getJsonData(GoogleSheetsURLs.initiativeURL).subscribe(
      data => {
        this.initiative = parseSheetsData<Initiative>(data)[0];
      }
    );
  }

}
