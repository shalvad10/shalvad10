import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-best-tours',
  templateUrl: './best-tours.component.html',
  styleUrls: ['./best-tours.component.scss']
})
export class BestToursComponent implements OnInit {

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
      1000:{
        items:2,
        nav:false, 
        dots: false,
      },
      2000:{
        items:3,
        nav:false,
        loop:true
      },
      3000:{
        items:4,
        nav:false,
        loop:true
      }
    }
  };
  
  slides = [
    {id: '1', price: 150, oldPrice: 200, currency: '$', priceType: 1, name: '1 Group Travel Go To Bea Amsterdam', rating: '7K+', img: "./assets/images/feature/f-1.png"},
    {id: '2', price: 150, oldPrice: 200, currency: '$', priceType: 1, name: '2 Group Travel Go To Bea Amsterdam', rating: '7K+', img: "./assets/images/feature/f-2.png"},
    {id: '3', price: 150, oldPrice: 200, currency: '$', priceType: 1, name: '3 Group Travel Go To Bea Amsterdam', rating: '7K+', img: "./assets/images/feature/f-1.png"},
    {id: '4', price: 150, oldPrice: 200, currency: '$', priceType: 1, name: '4 Group Travel Go To Bea Amsterdam', rating: '7K+', img: "./assets/images/feature/f-2.png"},
  ];

  ngOnInit() {
  }

}
