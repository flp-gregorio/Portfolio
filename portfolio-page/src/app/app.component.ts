import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, FooterComponent, PortfolioCardComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-page';
  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit() {
    // Set up title changes based on route data
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      map(route => route.snapshot.data['title'])
    ).subscribe((title) => {
      if (title) {
        this.titleService.setTitle(`Felipe Gregório - ${title}`);
      }
    });
  }
}