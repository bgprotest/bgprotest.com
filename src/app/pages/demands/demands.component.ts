import { Component, OnInit } from '@angular/core';

import { GoogleSheetsService } from '../../shared/google-sheets.service';
import { GoogleSheetsURLs } from '../../shared/google-sheets-data';
import { parseSheetsData } from '../../shared/google-sheets-parser';
import { TranslateService } from '@ngx-translate/core';
import { LangComponent } from '../../shared/lang-component';


export interface DemandInfo {
  id: string,
}

export interface Demand {
  title: {},
  text: {}
}

@Component({
  selector: 'app-demands',
  templateUrl: './demands.component.html',
  styleUrls: ['./demands.component.sass']
})
export class DemandsComponent extends LangComponent implements OnInit {

  panelOpenState = false;

  demands: Demand[];

  constructor(
    private sheetsService: GoogleSheetsService,
    private _translate: TranslateService
  ) {
    super(_translate);
  }

  ngOnInit(): void {
    this.sheetsService.getJsonData(GoogleSheetsURLs.demandsURL).subscribe(
      data => {
        this.demands = parseSheetsData<Demand>(data);
      }
    );
  }

}
