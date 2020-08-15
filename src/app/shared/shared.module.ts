import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { GoogleSheetsService } from './google-sheets.service';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule,
    MatSelectModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
