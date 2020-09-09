import { Component, OnInit, Input } from '@angular/core';
import { LangComponent } from 'src/app/shared/lang-component';
import { TranslateService } from '@ngx-translate/core';
import { MediaInfo } from '../media/media.component';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.sass']
})
export class MediaCardComponent extends LangComponent implements OnInit {

  @Input() data: MediaInfo;

  constructor(private _translate: TranslateService) {
    super(_translate);
  }

  ngOnInit(): void {

  }

}
