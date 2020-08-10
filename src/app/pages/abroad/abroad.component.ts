import { Component, OnInit } from '@angular/core';

export interface AbroadInfo {
  city: string,
  country: string,
  icon: string,
  imageLink: string,
  facebookLink?: string
}

@Component({
  selector: 'app-abroad',
  templateUrl: './abroad.component.html',
  styleUrls: ['./abroad.component.sass']
})
export class AbroadComponent implements OnInit {

  abroadCards: AbroadInfo[] = [{
    city: 'Berlin',
    country: 'Germany',
    icon: "flag-icon-de",
    facebookLink: "https://www.facebook.com/%D0%9F%D1%80%D0%BE%D1%82%D0%B5%D1%81%D1%82-%D1%81%D1%80%D0%B5%D1%89%D1%83-%D0%BA%D0%BE%D1%80%D1%83%D0%BC%D0%BF%D0%B8%D1%80%D0%B0%D0%BD%D0%B0%D1%82%D0%B0-%D0%B2%D0%BB%D0%B0%D1%81%D1%82-%D0%B2-%D0%91%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D0%B8%D1%8F-%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD-2020-103246464812703",
    imageLink: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
  },
  {
    city: 'London',
    country: 'United_Kingdom',
    icon: "flag-icon-gb",
    imageLink: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
  },
  {
    city: 'X',
    country: 'Y',
    icon: "flag-icon-gb",
    imageLink: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
  },
  {
    city: 'Z',
    country: 'A',
    icon: "flag-icon-gb",
    imageLink: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
