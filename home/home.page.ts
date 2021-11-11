import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import  json  from "../home.json";
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {
  products: any = (json as any).default;

  categories = [];
  highlights = [];
  featured = [];
 
  catSlideOpts = {
    slidesPerView: 3.5,
    spaceBetween: 10,
    slidesOffsetBefore: 11,
    freeMode: true
  };
 
  highlightSlideOpts =  {
    slidesPerView: 1.05,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true
  };
 
  featuredSlideOpts = {
    slidesPerView: 1.2,
    spaceBetween: 10,
    freeMode: true
  };
 
  showLocationDetail = false;
  getJSON: any;
 
  constructor(private http: HttpClient) {}
 
  ngOnInit() {
    console.log(json);
      this.categories = json.categories;
      this.highlights = json.highlights;
      this.featured = json.featured;
    };
  }
  
  
