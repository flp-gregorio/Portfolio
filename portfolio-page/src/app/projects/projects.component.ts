import { Component, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PortfolioCardComponent } from '../portfolio-card/portfolio-card.component';

@Component({
    selector: 'app-projects',
    imports: [CommonModule, PortfolioCardComponent],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  onWheel(event: WheelEvent): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    event.preventDefault();
    const container = this.scrollContainer.nativeElement;
    const scrollAmount = event.deltaY;
    
    // Smooth horizontal scrolling
    container.scrollLeft += scrollAmount;
  }

  scrollLeft(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const container = this.scrollContainer.nativeElement;
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const container = this.scrollContainer.nativeElement;
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }
}