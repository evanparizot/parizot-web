import { Component, OnInit, AfterViewInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { throttleTime, map, pairwise, distinctUntilChanged, share, filter } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

enum PagePositionState {
  NearTop = 'nearTop',
  RestOfPage = 'restOfPage'
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({ transform: 'translateY(-100%)'})
      ),
      state(
        VisibilityState.Visible,
        style({ transform: 'translateY(0)'})
      ),
      transition('* => *', animate('300ms ease-in'))
    ]),
    trigger('solidify', [
      state(
        PagePositionState.NearTop,
        style({ backgroundColor: 'rgba(179,186,197,0.2)' })
      ),
      state(
        PagePositionState.RestOfPage,
        style({ backgroundColor: 'rgba(179,186,197,1)'})
      ),
      // transition('* => restOfPage', animate('0.5s')),
      transition('* => nearTop', animate('0.5s'))
    ])
  ]
})
export class HeaderComponent implements OnInit, AfterViewInit {
  private isVisible = true;
  private topPagePosition = true;
  
  constructor(private router: Router) { }
  
  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  @HostBinding('@solidify')
  get solidify(): PagePositionState {
    return this.topPagePosition ? PagePositionState.NearTop : PagePositionState.RestOfPage;
  }
  
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    //https://netbasal.com/reactive-sticky-header-in-angular-12dbffb3f1d3
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1,y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );

    const scrollPosition$ = fromEvent(window, 'scroll').pipe(
      throttleTime(20),
      map(() => window.pageYOffset),
      map((y1): PagePositionState => (y1 > window.innerHeight ? PagePositionState.RestOfPage : PagePositionState.NearTop)
    ));

    const scrollUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const scrollDown$ = scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );

    scrollUp$.subscribe(() => (this.isVisible = true));
    scrollDown$.subscribe(() => (this.isVisible = false));

    const nearTop$ = scrollPosition$.pipe(
      filter(position => position === PagePositionState.NearTop)
    );
    const restOfPage$ = scrollPosition$.pipe(
      filter(position => position === PagePositionState.RestOfPage)
    );

    nearTop$.subscribe(() => (this.topPagePosition = true));
    restOfPage$.subscribe(() => (this.topPagePosition = false));

  }

}
