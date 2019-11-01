import { Injectable } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd, RoutesRecognized, NavigationStart } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  showFooter: boolean;

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
          if (child.firstChild) {
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

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;
        while(child) {
          if(child.snapshot.data && child.snapshot.data['showFooter'] != null) {
            return child.snapshot.data['showFooter'];
          }
          return true;
        }
        return true;
      })
    ).subscribe((showFooter: boolean) => {
        this.showFooter = showFooter;
      });
  }
}