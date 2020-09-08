import { Component, OnInit } from '@angular/core';
import { LangComponent } from '../lang-component';
import { GoogleSheetsService } from '../google-sheets.service';
import { TranslateService } from '@ngx-translate/core';
import { GoogleSheetsURLs } from '../google-sheets-data';
import { parseSheetsData } from '../google-sheets-parser';

export interface FooterAnnouncementData {
  text: {}
  icon: string
  link: string
}


@Component({
  selector: 'app-footer-announcement',
  templateUrl: './footer-announcement.component.html',
  styleUrls: ['./footer-announcement.component.sass']
})
export class FooterAnnouncementComponent extends LangComponent implements OnInit {

  data: FooterAnnouncementData;

  constructor(
    private sheetsService: GoogleSheetsService,
    private _translate: TranslateService
  ) {
    super(_translate);
  }

  ngOnInit(): void {
    this.sheetsService.getJsonData(GoogleSheetsURLs.footerAnnouncementURL).subscribe(
      data => {
        this.data = parseSheetsData<FooterAnnouncementData>(data)[0];
      }
    );
  }
}
