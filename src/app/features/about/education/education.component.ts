import { Component, OnInit, Input } from "@angular/core";
import { Education } from "../models/about";

@Component({
  selector: "app-about-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.scss"]
})
export class EducationComponent implements OnInit {
  @Input() education: Education[];

  constructor() {}

  ngOnInit() {}
}
