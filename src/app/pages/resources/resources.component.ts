import { Component, OnInit } from '@angular/core';
import { LangComponent } from 'src/app/shared/lang-component';
import { GoogleSheetsService } from 'src/app/shared/google-sheets.service';
import { TranslateService } from '@ngx-translate/core';
import { GoogleSheetsURLs } from 'src/app/shared/google-sheets-data';
import { parseSheetsData } from 'src/app/shared/google-sheets-parser';

export interface Resource {
  name: {},
  link: string
}

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.sass']
})
export class ResourcesComponent extends LangComponent implements OnInit {

  resources: Resource[];

  constructor(
    private sheetsService: GoogleSheetsService,
    private _translate: TranslateService
  ) {
    super(_translate);
  }

  ngOnInit(): void {
    this.sheetsService.getJsonData(GoogleSheetsURLs.resourcesURL).subscribe(
      data => {
        this.resources = parseSheetsData<Resource>(data);
      }
    );
  }
}
