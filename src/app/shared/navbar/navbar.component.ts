import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';


interface NavItem {
  id: string,
  link: string,
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  navItems: NavItem[] = [
    {
      id: 'overview',
      link: 'overview-page'
    },
    {
      id: 'demands',
      link: 'demands-page'
    },
    {
      id: 'abroad',
      link: 'abroad-page'
    },
    {
      id: 'resources',
      link: 'resources-page'
    },
    // {
    //   id: 'learnMore',
    //   link: 'learn-more-page'
    // }
  ]

  selectedLanguage;

  languages = [{
    code: "en",
    icon: "flag-icon-gb"
  },
  {
    code: "de",
    icon: "flag-icon-de"
  },
  {
    code: "bg",
    icon: "flag-icon-bg"
  }];

  constructor(private translate: TranslateService) {
    this.selectedLanguage = this.languages[0];
  }

  ngOnInit(): void {
  }

  langChanged(event): void {
    this.translate.use(event.value.code);
  }

}
