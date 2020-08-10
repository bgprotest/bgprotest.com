import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  imageSources = [
    'https://s2.reutersmedia.net/resources/r/?m=02&d=20200713&t=2&i=1525575840&r=LYNXNPEG6C1KG&w=1280',
    'https://static.euronews.com/articles/stories/04/87/18/34/1440x810_cmsv2_8679c73e-105c-58aa-9512-dfcf547f9af6-4871834.jpg',
    'https://www.economist.com/sites/default/files/20200725_EUP506.jpg',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
