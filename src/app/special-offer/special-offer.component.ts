import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-special-offer',
  templateUrl: './special-offer.component.html',
  styleUrls: ['./special-offer.component.scss']
})
export class SpecialOfferComponent implements OnInit {

  constructor() { }

  
  destination1: OwlOptions = {
    stagePadding: 1,
    items: 4,
    loop: true,
    margin:25,
    navSpeed: 1000,
    autoWidth: true,
    autoplay: true,
    dots: false,
    nav: false,
    navText : [`<div class="owl-nav"><button type="button" role="presentation" class="owl-prev"><i class="bx bx-chevron-left"></i></button>`,"<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:1,
        nav:false,
        dots : false
      },
      500:{
        items:2,
        nav:false, 
        dots: false,
      },
      1000:{
        items:3,
        nav:false,
        loop:true
      },
      1500:{
        items:4,
        nav:false,
        loop:true
      }
    }
  };
  
  slides = [
    {id: '1', length: { days: 5, night: 6}, price: 145, oldPrice: 200, currency: '$', priceType: 1, name: '1 Paris Hill Tour', rating: '8K', img: "./assets/images/package/offer-1.png"},
    {id: '2', length: { days: 5, night: 6}, price: 145, oldPrice: 200, currency: '$', priceType: 1, name: '2 Paris Hill Tour', rating: '8K', img: "./assets/images/package/offer-2.png"},
    {id: '3', length: { days: 5, night: 6}, price: 145, oldPrice: 200, currency: '$', priceType: 1, name: '3 Lake Garda, Spain', rating: '8K', img: "./assets/images/package/offer-3.png"},
    {id: '4', length: { days: 5, night: 6}, price: 145, oldPrice: 200, currency: '$', priceType: 1, name: '4 Paris Hill Tour', rating: '8K', img: "./assets/images/package/offer-1.png"},
  ];

  ngOnInit() {
  }

}
