import { Component, OnInit, Input } from '@angular/core';
import { AbroadInfo } from '../abroad/abroad.component';

@Component({
  selector: 'app-abroad-card',
  templateUrl: './abroad-card.component.html',
  styleUrls: ['./abroad-card.component.sass']
})
export class AbroadCardComponent implements OnInit {

  @Input() data: AbroadInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
