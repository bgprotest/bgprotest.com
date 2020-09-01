import { Component, OnInit } from '@angular/core';
import { LangComponent } from '../lang-component';
import { GoogleSheetsService } from '../google-sheets.service';
import { TranslateService } from '@ngx-translate/core';
import { GoogleSheetsURLs } from '../google-sheets-data';
import { parseSheetsData } from '../google-sheets-parser';

export interface Notice {
  text: {}
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent extends LangComponent implements OnInit {

  notice: Notice;

  constructor(
    private sheetsService: GoogleSheetsService,
    private _translate: TranslateService
  ) {
    super(_translate);
  }

  ngOnInit(): void {
    this.sheetsService.getJsonData(GoogleSheetsURLs.noticeURL).subscribe(
      data => {
        this.notice = parseSheetsData<Notice>(data)[0];
      }
    );
  }

}
