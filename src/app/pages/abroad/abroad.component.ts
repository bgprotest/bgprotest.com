import { Component, OnInit } from '@angular/core';
import { GoogleSheetsService } from 'src/app/shared/google-sheets.service';
import { GoogleSheetsURLs } from 'src/app/shared/google-sheets-data';
import { parseSheetsData } from 'src/app/shared/google-sheets-parser';

export interface AbroadInfo {
  city: {},
  country: {},
  icon: string,
  imageLink: string,
  facebookLink?: string
}

@Component({
  selector: 'app-abroad',
  templateUrl: './abroad.component.html',
  styleUrls: ['./abroad.component.sass']
})
export class AbroadComponent implements OnInit {

  abroadCards: AbroadInfo[];

  constructor(private sheetsService: GoogleSheetsService) { }

  ngOnInit(): void {
    this.sheetsService.getJsonData(GoogleSheetsURLs.abroadURL).subscribe(
      data => {
        this.abroadCards = parseSheetsData<AbroadInfo>(data);
      }
    );
  }

}
