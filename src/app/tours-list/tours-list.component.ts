import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.scss']
})
export class ToursListComponent implements OnInit {

  constructor() { }

  tours = [
    {
      img: 'assets/images/package/p-2.png',
      price: 280,
      currency: '$',
      priceType: 1,
      lengthDAYS: 5,
      lengthNIGHTS: 6,
      name: 'Lake Garda, Italy',
      rating: '8K',
      starsCount: 3
    },
    {
      img: 'assets/images/package/p-3.png',
      price: 320,
      currency: '$',
      priceType: 1,
      lengthDAYS: 5,
      lengthNIGHTS: 6,
      name: 'Mount Dtna, Italyr',
      rating: '8K',
      starsCount: 3
    },
    {
      img: 'assets/images/package/p-1.png',
      price: 165,
      currency: '$',
      priceType: 1,
      lengthDAYS: 5,
      lengthNIGHTS: 6,
      name: 'Paris Hill Tour',
      rating: '8K',
      starsCount: 3
    },
  ];

  ngOnInit() { }


}
