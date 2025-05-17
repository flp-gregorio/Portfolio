import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioCardComponent } from '../portfolio-card/portfolio-card.component';

@Component({
    selector: 'app-portfolio',
    imports: [CommonModule, PortfolioCardComponent],
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  // Component logic can go here
}