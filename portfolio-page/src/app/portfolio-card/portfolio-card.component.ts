import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ColorThiefService } from '@soarlin/angular-color-thief';

@Component({
    selector: 'app-portfolio-card',
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
  palette: [number, number, number][] | null = null;
  
  // Make window available in the template
  get window(): Window {
    return window;
  }

  constructor(private colorThief: ColorThiefService) {}

  async loadPaletteFromUrl() {
    try {
      this.palette = await this.colorThief.getPaletteFromUrl(this.imageUrl);
      console.log('Palette loaded:', this.palette);
    } catch (error) {
      console.error('Failed to load image:', error);
    }
  }
}