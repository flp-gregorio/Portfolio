import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'portfolio', component: PortfolioComponent, data: { title: 'Portfolio' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } }
];
