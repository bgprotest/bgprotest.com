import { Component, OnInit, Input } from '@angular/core';
import { AbroadInfo } from '../abroad/abroad.component';
import { LangComponent } from 'src/app/shared/lang-component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-abroad-card',
  templateUrl: './abroad-card.component.html',
  styleUrls: ['./abroad-card.component.sass']
})
export class AbroadCardComponent extends LangComponent implements OnInit {

  @Input() data: AbroadInfo;

  constructor(private _translate: TranslateService) {
    super(_translate);
  }

  ngOnInit(): void {

  }

}
