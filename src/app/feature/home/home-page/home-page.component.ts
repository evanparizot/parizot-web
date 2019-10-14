import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  photoUrl:string = null;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Evan Parizot - Home')
  }

  getRandomPhoto(): string {
    return "assets/images/florence_night.jpg"
  }

}
