import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioCardComponent } from '../portfolio-card/portfolio-card.component';

@Component({
    selector: 'app-projects',
    imports: [CommonModule, PortfolioCardComponent],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  onWheel(event: WheelEvent): void {
    event.preventDefault();
    const container = this.scrollContainer.nativeElement;
    const scrollAmount = event.deltaY;
    
    // Smooth horizontal scrolling
    container.scrollLeft += scrollAmount;
  }

  scrollLeft(): void {
    const container = this.scrollContainer.nativeElement;
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight(): void {
    const container = this.scrollContainer.nativeElement;
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }
}