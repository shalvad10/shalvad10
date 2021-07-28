import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  constructor() { }

  // loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }
  
  //   slides = [
  //     {id: 1, img: "https://dummyimage.com/350x150/423b42/fff"},
  //     {id: 2, img: "https://dummyimage.com/350x150/2a2b7a/fff"},
  //     {id: 3, img: "https://dummyimage.com/350x150/1a2b7a/fff"},
  //     {id: 4, img: "https://dummyimage.com/350x150/7a2b7a/fff"},
  //     {id: 5, img: "https://dummyimage.com/350x150/9a2b7a/fff"},
  //     {id: 6, img: "https://dummyimage.com/350x150/5a2b7a/fff"},
  //     {id: 6, img: "https://dummyimage.com/350x150/4a2b7a/fff"}
  //   ];

  
  destination1: OwlOptions = {
    stagePadding: 1,
    items: 4,
    loop: true,
    margin:25,
    smartSpeed: 1000,
    autoWidth: true,
    autoplay: false,
    dots: false,
    nav: true,
    navText : [`<div class="owl-nav"><button type="button" role="presentation" class="owl-prev"><i class="bx bx-chevron-left"></i></button>`,"<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:1,
        nav:true,
        dots : false
      },
      350:{
        items:2,
        nav:true, 
        dots: false,
      },
      700:{
        items:3,
        nav:true,
        loop:true
      },
      1050:{
        items:4,
        nav:true,
        loop:true
      }
    }
  };
  
  slides = [
    {id: 1, price: 145, currency: '$', priceType: 1, name: 'Paris Hill Tour', rating: '8K', img: "./assets/images/destination/d-4.png"},
    {id: 2, price: 145, currency: '$', priceType: 1, name: 'Paris Hill Tour', rating: '8K', img: "./assets/images/destination/d-5.png"},
    {id: 3, price: 145, currency: '$', priceType: 1, name: 'Lake Garda, Spain', rating: '8K', img: "./assets/images/destination/d-7.png"},
    {id: 4, price: 145, currency: '$', priceType: 1, name: 'Paris Hill Tour', rating: '8K', img: "./assets/images/destination/d-6.png"},
  ];
  
  slides2 = [
    {id: 1, price: 145, currency: '$', priceType: 1, name: 'Paris Hill Tour', rating: '8K', img: "./assets/images/destination/d-4.png"},
    {id: 2, price: 145, currency: '$', priceType: 1, name: 'Paris Hill Tour', rating: '8K', img: "./assets/images/destination/d-5.png"},
    {id: 3, price: 145, currency: '$', priceType: 1, name: 'Lake Garda, Spain', rating: '8K', img: "./assets/images/destination/d-7.png"},
    {id: 4, price: 145, currency: '$', priceType: 1, name: 'Paris Hill Tour', rating: '8K', img: "./assets/images/destination/d-6.png"},
  ];

// $('.destinations-2').owlCarousel({
//    stagePadding: 1,
//      items: 3,
//      loop: true,
//      margin:20,
//      smartSpeed: 1500,
//      autoplay: false,
//      dots: false,
//      nav: true,
//      navText : ["<i class='bx bx-chevron-left' ></i>","<i class='bx bx-chevron-right'></i>"],
//      responsive:{
//          0:{
//              items:1,
//              nav:false,
//              dots : false
//          },
//          600:{
//              items:2,
//              nav:false,
//              dost : false,
//          },
//          1000:{
//              items:3,
//              nav:true,
//              loop:true
//          }
//      }
// });

  ngOnInit() {
  }

}
