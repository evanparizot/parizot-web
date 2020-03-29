import { Component, OnInit } from "@angular/core";
import { Profile } from "../models/about";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/core/core.state";
import { Observable } from "rxjs";
import { selectAboutProfile } from "../state/about.selectors";

@Component({
  selector: "app-about-container",
  templateUrl: "./about-container.component.html",
  styleUrls: ["./about-container.component.scss"]
})
export class AboutContainerComponent implements OnInit {
  profile$: Observable<Profile>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.profile$ = this.store.select(selectAboutProfile);
  }
}
