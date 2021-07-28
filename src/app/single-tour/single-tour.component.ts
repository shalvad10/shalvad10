import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-tour',
  templateUrl: './single-tour.component.html',
  styleUrls: ['./single-tour.component.scss']
})
export class SingleTourComponent implements OnInit {

  constructor() { }

  @Input() tour;

  ngOnInit() {
  }

}
