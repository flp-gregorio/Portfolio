import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.css']
})
export class PortfolioCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() projectLink: string = '';
  @Input() technologies: { name: string, color: string, icon: string }[] = [];
  
  // Make window available in the template
  get window(): Window {
    return window;
  }
}