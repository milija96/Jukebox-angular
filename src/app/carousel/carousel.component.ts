import { Component, OnInit } from '@angular/core';
import { Carousel } from './carousel.model';
import { CarouselService } from './carousel.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  images: Carousel[] = [];


  constructor(private imageService: CarouselService) { }

  ngOnInit() {
    console.log(this.images = this.imageService.getImages());
  }

}
