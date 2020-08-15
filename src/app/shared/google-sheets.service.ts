import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SheetData {
  feed: {
    entry: {
      gs$cell: {
        row: string
        col: string,
        inputValue: string
      }
    }[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetsService {

  constructor(
    private http: HttpClient
  ) { }

  public getJsonData(sheetUrl: string): Observable<SheetData> {
    return this.http.get<SheetData>(sheetUrl);
  }
}
