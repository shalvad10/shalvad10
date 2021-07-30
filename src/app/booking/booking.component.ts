import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import * as jquery from '../../assets/js/jquery-3.6.0.min.js';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor() { }

  jquery = jquery;

  ngOnInit() {    
    new Typed('.element', {
      strings: ["Hampshire", "Indonesia", "Madagascar "],
      typeSpeed: 150,
      loop: true,
    });
  }

}
