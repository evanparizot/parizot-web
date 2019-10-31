import { Injectable } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;
        let title = "Evan Parizot"
        while (child) {
          if(child.firstChild) {
            child = child.firstChild;
          } else if (child.snapshot.data && child.snapshot.data['title']) {
            return `${child.snapshot.data['title']} | ${title}`;
          } else {
            return title;
          }
        }
        return title;
      })
    ).subscribe((title: string) => {
      this.titleService.setTitle(title);
    });
  }
}