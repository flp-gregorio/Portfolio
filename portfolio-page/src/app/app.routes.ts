import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'projects', component: ProjectsComponent, data: { title: 'Projects' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } }
];
