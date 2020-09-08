import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { FooterAnnouncementComponent } from './footer-announcement/footer-announcement.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, FooterAnnouncementComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule,
    MatSelectModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    FooterAnnouncementComponent
  ]
})
export class SharedModule { }
