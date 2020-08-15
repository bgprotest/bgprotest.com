import { Component, OnInit } from '@angular/core';
import { GoogleSheetsService } from 'src/app/shared/google-sheets.service';
import { GoogleSheetsURLs } from 'src/app/shared/google-sheets-data';
import { parseSheetsData } from 'src/app/shared/google-sheets-parser';
import { IImage } from 'ng-simple-slideshow';

export interface Images {
  imageLink: string,
  creditText: string,
  creditLink: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  images: Images[];
  imagesSources: IImage[];

  constructor(
    private sheetsService: GoogleSheetsService,
  ) {}

  ngOnInit(): void {
    this.sheetsService.getJsonData(GoogleSheetsURLs.homeURL).subscribe(
      data => {
        this.images = parseSheetsData<Images>(data);
        this.imagesSources = this.images.map(value => {
          const mappedObj = {
            url: value.imageLink,
            caption: value.creditText,
            clickAction: () => {
              if (value.creditLink) {
                window.open(value.creditLink)
              }
            }
          };
          return mappedObj
        });
      }
    );
  }

}
