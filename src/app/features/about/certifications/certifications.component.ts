import { Component, OnInit, Input } from "@angular/core";
import { Certification } from "../models/about";

@Component({
  selector: "app-about-certifications",
  templateUrl: "./certifications.component.html",
  styleUrls: ["./certifications.component.scss"]
})
export class CertificationsComponent implements OnInit {
  @Input() certifications: Certification[];

  constructor() {}

  ngOnInit() {}
}
