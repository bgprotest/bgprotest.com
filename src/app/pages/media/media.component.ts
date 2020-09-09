import { Component, OnInit } from '@angular/core';
import { GoogleSheetsService } from 'src/app/shared/google-sheets.service';
import { GoogleSheetsURLs } from 'src/app/shared/google-sheets-data';
import { parseSheetsData } from 'src/app/shared/google-sheets-parser';

export interface MediaInfo {
  link: {},
  imageLink: string,
  countryIcon: string,
  title: {},
  subtitle?: string,
  credit?: string
}

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.sass']
})
export class MediaComponent implements OnInit {

  mediaCards: MediaInfo[];

  constructor(private sheetsService: GoogleSheetsService) { }

  ngOnInit(): void {
    this.sheetsService.getJsonData(GoogleSheetsURLs.mediaURL).subscribe(
      data => {
        this.mediaCards = parseSheetsData<MediaInfo>(data);
      }
    );
  }

}
