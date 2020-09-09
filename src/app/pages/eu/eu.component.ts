import { Component, OnInit } from '@angular/core';
import { LangComponent } from 'src/app/shared/lang-component';
import { GoogleSheetsService } from 'src/app/shared/google-sheets.service';
import { TranslateService } from '@ngx-translate/core';
import { GoogleSheetsURLs } from 'src/app/shared/google-sheets-data';
import { parseSheetsData } from 'src/app/shared/google-sheets-parser';

export interface EU {
  text: {}
}

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.sass']
})
export class EuComponent extends LangComponent implements OnInit {

  eu: EU;

  constructor(
    private sheetsService: GoogleSheetsService,
    private _translate: TranslateService
  ) {
    super(_translate);
  }

  ngOnInit(): void {
    this.sheetsService.getJsonData(GoogleSheetsURLs.euURL).subscribe(
      data => {
        this.eu = parseSheetsData<EU>(data)[0];
      }
    );
  }

}
