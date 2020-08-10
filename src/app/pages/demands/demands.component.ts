import { Component, OnInit } from '@angular/core';

export interface DemandInfo {
  id: string,
}

@Component({
  selector: 'app-demands',
  templateUrl: './demands.component.html',
  styleUrls: ['./demands.component.sass']
})
export class DemandsComponent implements OnInit {

  panelOpenState = false;

  demands: DemandInfo[] = [{
    id: "boiko"
  },
  {
    id: "geshev"
  },
  {
    id: "judical_reform"
  },
  {
    id: "early_voting"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
